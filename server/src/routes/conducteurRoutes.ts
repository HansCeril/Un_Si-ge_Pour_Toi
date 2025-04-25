import express from "express";
import {
    getConducteur,
    createConducteur,
    updateConducteur,
    getConducteurCovoiturages,
} from "../controllers/conducteurControllers";

const router = express.Router();

router.get("/:cognitoId", getConducteur);
router.put("/:cognitoId", updateConducteur);
router.get("/:cognitoId/properties", getConducteurCovoiturages);
router.post("/", createConducteur);

export default router;