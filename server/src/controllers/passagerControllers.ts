import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();


export const getPassager = async(req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const passager = await prisma.passager.findUnique({
            where: { cognitoId },
            include: {
                favorites: true
            }
        });

        if (passager) {
            res.json(passager)
        } else {
            res.status(404).json({ message: "Passager not found"})
        }
        
    } catch (error: any) {
        res
          .status(500)
          .json({ message: `Error retrieving tenant: ${error.message}` });
      }
};

export const createPassager = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, name, email, phoneNumber } = req.body;
  
      const passager = await prisma.passager.create({
        data: {
          cognitoId,
          name,
          email,
          phoneNumber,
        },
      });
  
      res.status(201).json(passager);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error creating passager: ${error.message}` });
    }
};

export const updatePassager = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId } = req.params;
      const { name, email, phoneNumber } = req.body;
  
      const updatePassager = await prisma.passager.update({
        where: { cognitoId },
        data: {
          name,
          email,
          phoneNumber,
        },
      });
  
      res.json(updatePassager);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error updating tenant: ${error.message}` });
    }
};


export const getCurrentProperties = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const properties = await prisma.property.findMany({
        where: { passagers: { some: { cognitoId } } },
        include: {
          location: true,
        },
      });
  
      const propertiesWithFormattedLocation = await Promise.all(
        properties.map(async (property) => {
          const coordinates: { coordinates: string }[] =
            await prisma.$queryRaw`SELECT ST_asText(coordinates) as coordinates from "Location" where id = ${property.location.id}`;
  
          const geoJSON: any = wktToGeoJSON(coordinates[0]?.coordinates || "");
          const longitude = geoJSON.coordinates[0];
          const latitude = geoJSON.coordinates[1];
  
          return {
            ...property,
            location: {
              ...property.location,
              coordinates: {
                longitude,
                latitude,
              },
            },
          };
        })
      );
  
      res.json(propertiesWithFormattedLocation);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Error retrieving manager properties: ${err.message}` });
    }
  };



export const addFavoriteProperty = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, propertyId } = req.params;
      const passager = await prisma.passager.findUnique({
        where: { cognitoId },
        include: { favorites: true },
      });
  
      if (!passager) {
        res.status(404).json({ message: "Tenant not found" });
        return;
      }
  
      const propertyIdNumber = Number(propertyId);
      const existingFavorites = passager.favorites || [];
  
      if (!existingFavorites.some((fav) => fav.id === propertyIdNumber)) {
        const updatedTenant = await prisma.passager.update({
          where: { cognitoId },
          data: {
            favorites: {
              connect: { id: propertyIdNumber },
            },
          },
          include: { favorites: true },
        });
        res.json(updatedTenant);
      } else {
        res.status(409).json({ message: "Property already added as favorite" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error adding favorite property: ${error.message}` });
    }
  };
  
export const removeFavoriteProperty = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, propertyId } = req.params;
      const propertyIdNumber = Number(propertyId);
  
      const updatedPassager = await prisma.passager.update({
        where: { cognitoId },
        data: {
          favorites: {
            disconnect: { id: propertyIdNumber },
          },
        },
        include: { favorites: true },
      });
  
      res.json(updatedPassager);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Error removing favorite property: ${err.message}` });
    }
  };