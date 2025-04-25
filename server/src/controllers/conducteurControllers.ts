import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getConducteur = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const conducteur = await prisma.conducteur.findUnique({
      where: { cognitoId },
    });

    if (conducteur) {
      res.json(conducteur);
    } else {
      res.status(404).json({ message: "Conducteur not found" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving conducteur: ${error.message}` });
  }
};

export const createConducteur = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;

    const conducteur = await prisma.conducteur.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    res.status(201).json(conducteur);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating conducteur: ${error.message}` });
  }
};

export const updateConducteur = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { name, email, phoneNumber } = req.body;

    const updateConducteur = await prisma.conducteur.update({
      where: { cognitoId },
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    res.json(updateConducteur);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating conducteur: ${error.message}` });
  }
};

export const getConducteurCovoiturages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const covoiturages = await prisma.covoiturage.findMany({
      where: { conducteurCognitoId: cognitoId },
      include: {
        location: true,
      },
    });

    const covoituragesWithFormattedLocation = await Promise.all(
      covoiturages.map(async (covoiturage) => {
        const coordinates: { coordinates: string }[] =
          await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${covoiturage.location.id}`;

        const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
        const longitude = geoJSON.coordinates[0];
        const latitude = geoJSON.coordinates[1];

        return {
          ...covoiturage,
          location: {
            ...covoiturage.location,
            coordinates: {
              longitude,
              latitude,
            },
          },
        };
      })
    );

    res.json(covoituragesWithFormattedLocation);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: `Error retrieving conducteur covoiturage: ${err.message}` });
  }
};