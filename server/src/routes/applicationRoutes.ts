import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware(["passager"]), createApplication);
router.put("/:id/status", authMiddleware(["conducteur"]), updateApplicationStatus);
router.get("/", authMiddleware(["conducteur", "passager"]), listApplications);

export default router;