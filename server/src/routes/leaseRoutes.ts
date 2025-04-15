import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getLeasePayments, getLeases } from "../controllers/leaseControllers";

const router = express.Router();

router.get("/", authMiddleware(["conducteur", "passager"]), getLeases);
router.get(
  "/:id/payments",
  authMiddleware(["conducteur", "passager"]),
  getLeasePayments
);

export default router;