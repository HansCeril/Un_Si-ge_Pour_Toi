import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { S3Client } from "@aws-sdk/client-s3";
import { Location } from "@prisma/client";
import { Upload } from "@aws-sdk/lib-storage";
import axios from "axios";

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

export const getCovoiturages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      favoriteIds,
      covoiturageType,
      latitude,
      longitude,
    } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (favoriteIds) {
      const favoriteIdsArray = (favoriteIds as string).split(",").map(Number);
      whereConditions.push(
        Prisma.sql`p.id IN (${Prisma.join(favoriteIdsArray)})`
      );
    }

    if (covoiturageType && covoiturageType !== "any") {
      whereConditions.push(
        Prisma.sql`p."covoiturageType" = ${covoiturageType}::"covoiturageType"`
      );
    }

    if (latitude && longitude) {
      const lat = parseFloat(latitude as string);
      const lng = parseFloat(longitude as string);
      const radiusInKilometers = 1000;
      const degrees = radiusInKilometers / 111; // Converts kilometers to degrees

      whereConditions.push(
        Prisma.sql`ST_DWithin(
          l.coordinates::geometry,
          ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326),
          ${degrees}
        )`
      );
    }

    const completeQuery = Prisma.sql`
      SELECT 
        p.*,
        json_build_object(
          'id', l.id,
          'address', l.address,
          'city', l.city,
          'state', l.state,
          'country', l.country,
          'postalCode', l."postalCode",
          'coordinates', json_build_object(
            'longitude', ST_X(l."coordinates"::geometry),
            'latitude', ST_Y(l."coordinates"::geometry)
          )
        ) as location
      FROM "Covoiturage" p
      JOIN "Location" l ON p."locationId" = l.id
      ${
        whereConditions.length > 0
          ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
          : Prisma.empty
      }
    `;

    const covoiturages = await prisma.$queryRaw(completeQuery);

    res.json(covoiturages);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving covoiturages: ${error.message}` });
  }
};

export const getCovoiturage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const covoiturage = await prisma.covoiturage.findUnique({
      where: { id: Number(id) },
      include: {
        location: true,
      },
    });

    if (covoiturage) {
      const coordinates: { coordinates: string }[] =
        await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${covoiturage.location.id}`;

      const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
      const longitude = geoJSON.coordinates[0];
      const latitude = geoJSON.coordinates[1];

      const covoiturageWithCoordinates = {
        ...covoiturage,
        location: {
          ...covoiturage.location,
          coordinates: {
            longitude,
            latitude,
          },
        },
      };
      res.json(covoiturageWithCoordinates);
    }
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error retrieving covoiturage: ${err.message}` });
  }
};

export const createCovoiturage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[];
    const {
      address,
      city,
      state,
      country,
      postalCode,
      conducteurCognitoId,
      ...covoiturageData
    } = req.body;

    console.log(covoiturageData)

    // const photoUrls = await Promise.all(
    //   files.map(async (file) => {
    //     const uploadParams = {
    //       Bucket: process.env.S3_BUCKET_NAME!,
    //       Key: `covoiturages/${Date.now()}-${file.originalname}`,
    //       Body: file.buffer,
    //       ContentType: file.mimetype,
    //     };

    //     const uploadResult = await new Upload({
    //       client: s3Client,
    //       params: uploadParams,
    //     }).done();

    //     return uploadResult.Location;
    //   })
    // );

    const geocodingUrl = `https://nominatim.openstreetmap.org/search?${new URLSearchParams(
      {
        street: address,
        city,
        country,
        postalcode: postalCode,
        format: "json",
        limit: "1",
      }
    ).toString()}`;
    const geocodingResponse = await axios.get(geocodingUrl, {
      headers: {
        "User-Agent": "UnSiegePourToi (anselmeceril@gmail.com",
      },
    });
    const [longitude, latitude] =
      geocodingResponse.data[0]?.lon && geocodingResponse.data[0]?.lat
        ? [
            parseFloat(geocodingResponse.data[0]?.lon),
            parseFloat(geocodingResponse.data[0]?.lat),
          ]
        : [0, 0];

    // create location
    const [location] = await prisma.$queryRaw<Location[]>`
      INSERT INTO "Location" (address, city, state, country, "postalCode", coordinates)
      VALUES (${address}, ${city}, ${state}, ${country}, ${postalCode}, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326))
      RETURNING id, address, city, state, country, "postalCode", ST_AsText(coordinates) as coordinates;
    `;

    // create covoiturage
    const newCovoiturage = await prisma.covoiturage.create({
      data: {
        ...covoiturageData,
        // photoUrls,
        locationId: location.id,
        conducteurCognitoId,
        isPetsAllowed: covoiturageData.isPetsAllowed === "true",
      },
      include: {
        location: true,
        conducteur: true,
      },
    });

    res.status(201).json(newCovoiturage);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error creating covoiturage: ${err.message}` });
  }
};