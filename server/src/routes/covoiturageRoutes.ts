import express from "express";
import {
  getCovoiturages,
  getCovoiturage,
  createCovoiturage,
} from "../controllers/covoiturageControllers";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getCovoiturages);
router.get("/:id", getCovoiturage);
router.post(
  "/",
  authMiddleware(["conducteur"]),
  upload.array("photos"),
  createCovoiturage
);

export default router;