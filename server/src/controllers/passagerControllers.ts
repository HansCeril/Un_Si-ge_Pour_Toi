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


export const getCurrentCovoiturage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
        const { cognitoId } = req.params;
        const covoiturages = await prisma.covoiturage.findMany({
        where: { passagers: { some: { cognitoId } } },
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
        .json({ message: `Error retrieving manager covoiturages: ${err.message}` });
    }
  };



export const addFavoriteCovoiturage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, covoiturageId } = req.params;
      const passager = await prisma.passager.findUnique({
        where: { cognitoId },
        include: { favorites: true },
      });
  
      if (!passager) {
        res.status(404).json({ message: "Tenant not found" });
        return;
      }
  
      const covoiturageIdNumber = Number(covoiturageId);
      const existingFavorites = passager.favorites || [];
  
      if (!existingFavorites.some((fav) => fav.id === covoiturageIdNumber)) {
        const updatedTenant = await prisma.passager.update({
          where: { cognitoId },
          data: {
            favorites: {
              connect: { id: covoiturageIdNumber },
            },
          },
          include: { favorites: true },
        });
        res.json(updatedTenant);
      } else {
        res.status(409).json({ message: "covoiturage already added as favorite" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error adding favorite covoiturage: ${error.message}` });
    }
  };
  
export const removeFavoriteCovoiturage = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { cognitoId, covoiturageId } = req.params;
      const covoiturageIdNumber = Number(covoiturageId);
  
      const updatedPassager = await prisma.passager.update({
        where: { cognitoId },
        data: {
          favorites: {
            disconnect: { id: covoiturageIdNumber },
          },
        },
        include: { favorites: true },
      });
  
      res.json(updatedPassager);
    } catch (err: any) {
      res
        .status(500)
        .json({ message: `Error removing favorite covoiturage: ${err.message}` });
    }
  };