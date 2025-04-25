import express from "express";
import {
    getPassager,
    createPassager,
    updatePassager,
    removeFavoriteCovoiturage,
    addFavoriteCovoiturage,
    getCurrentCovoiturage,
} from "../controllers/passagerControllers";

const router = express.Router();

router.get("/:cognitoId", getPassager);
router.put("/:cognitoId", updatePassager);
router.post("/", createPassager);
router.get("/:cognitoId/current-course", getCurrentCovoiturage);
router.post("/:cognitoId/favorites/:covoiturageId", addFavoriteCovoiturage);
router.delete("/:cognitoId/favorites/:covoiturageId", removeFavoriteCovoiturage);

export default router;