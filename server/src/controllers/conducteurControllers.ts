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
