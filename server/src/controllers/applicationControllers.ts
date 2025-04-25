import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listApplications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, userType } = req.query;

    let whereClause = {};

    if (userId && userType) {
      if (userType === "passager") {
        whereClause = { passagerCognitoId: String(userId) };
      } else if (userType === "conducteur") {
        whereClause = {
          covoiturage: {
            conducteurCognitoId: String(userId),
          },
        };
      }
    }

    const applications = await prisma.application.findMany({
      where: whereClause,
      include: {
        covoiturage: {
          include: {
            location: true,
            conducteur: true,
          },
        },
        passager: true,
      },
    });

    function calculateNextPaymentDate(startDate: Date): Date {
      const today = new Date();
      const nextPaymentDate = new Date(startDate);
      while (nextPaymentDate <= today) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      }
      return nextPaymentDate;
    }

    const formattedApplications = await Promise.all(
      applications.map(async (app) => {
        const lease = await prisma.lease.findFirst({
          where: {
            passager: {
              cognitoId: app.passagerCognitoId,
            },
            covoiturageId: app.covoiturageId,
          },
          orderBy: { startDate: "desc" },
        });

        return {
          ...app,
          covoiturage: {
            ...app.covoiturage,
            address: app.covoiturage.location.address,
          },
          conducteur: app.covoiturage.conducteur,
          lease: lease
            ? {
                ...lease,
                nextPaymentDate: calculateNextPaymentDate(lease.startDate),
              }
            : null,
        };
      })
    );

    res.json(formattedApplications);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving applications: ${error.message}` });
  }
};

export const createApplication = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      applicationDate,
      status,
      covoiturageId,
      passagerCognitoId,
      name,
      email,
      phoneNumber,
      message,
    } = req.body;
    
    const covoiturage = await prisma.covoiturage.findUnique({
      where: { id: covoiturageId }
    })
    if (!covoiturage) {
      res.status(404).json({ message: "covoiturage not found" });
      return;
    }

    const newApplication = await prisma.$transaction(async (prisma) => {
      // Create lease first
      const lease = await prisma.lease.create({
        data: {
          startDate: new Date(), // Today
          endDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ), // 1 year from today
          covoiturage: {
            connect: { id: covoiturageId },
          },
          passager: {
            connect: { cognitoId: passagerCognitoId },
          },
        },
      });

      console.log("PASS2")

      // Then create application with lease connection
      const application = await prisma.application.create({
        data: {
          applicationDate: new Date(applicationDate),
          status,
          name,
          email,
          phoneNumber,
          message,
          covoiturage: {
            connect: { id: covoiturageId },
          },
          passager: {
            connect: { cognitoId: passagerCognitoId },
          },
          lease: {
            connect: { id: lease.id },
          },
        },
        include: {
          covoiturage: true,
          passager: true,
          lease: true,
        },
      });

      console.log(application)

      return application;
    });

    res.status(201).json(newApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating application: ${error.message}` });
  }
};

export const updateApplicationStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("status:", status);

    const application = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        covoiturage: true,
        passager: true,
      },
    });

    if (!application) {
      res.status(404).json({ message: "Application not found." });
      return;
    }

    if (status === "Approved") {
      const newLease = await prisma.lease.create({
        data: {
          startDate: new Date(),
          endDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ),
          covoiturageId: application.covoiturageId,
          passagerCognitoId: application.passagerCognitoId,
        },
      });

      // Update the covoiturage to connect the passager
      await prisma.covoiturage.update({
        where: { id: application.covoiturageId },
        data: {
          passagers: {
            connect: { cognitoId: application.passagerCognitoId },
          },
        },
      });

      // Update the application with the new lease ID
      await prisma.application.update({
        where: { id: Number(id) },
        data: { status, leaseId: newLease.id },
        include: {
          covoiturage: true,
          passager: true,
          lease: true,
        },
      });
    } else {
      // Update the application status (for both "Denied" and other statuses)
      await prisma.application.update({
        where: { id: Number(id) },
        data: { status },
      });
    }

    // Respond with the updated application details
    const updatedApplication = await prisma.application.findUnique({
      where: { id: Number(id) },
      include: {
        covoiturage: true,
        passager: true,
        lease: true,
      },
    });

    res.json(updatedApplication);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating application status: ${error.message}` });
  }
};