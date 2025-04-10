import express from "express";
import {
    getPassager,
    createPassager,
    updatePassager,
    getCurrentProperties,
    addFavoriteProperty,
    removeFavoriteProperty,
} from "../controllers/passagerControllers";

const router = express.Router();

router.get("/:cognitoId", getPassager);
router.put("/:cognitoId", updatePassager);
router.post("/", createPassager);
router.get("/:cognitoId/current-course", getCurrentProperties);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;