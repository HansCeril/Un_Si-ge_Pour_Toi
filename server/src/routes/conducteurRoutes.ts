import express from "express";
import {
    getConducteur,
    createConducteur,
    updateConducteur,
//   getConducteurProperties,
} from "../controllers/conducteurControllers";

const router = express.Router();

router.get("/:cognitoId", getConducteur);
router.put("/:cognitoId", updateConducteur);
// router.get("/:cognitoId/properties", getConducteurProperties);
router.post("/", createConducteur);

export default router;