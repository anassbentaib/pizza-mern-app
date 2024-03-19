import express from "express";
import { update } from "../controllers/user.controller";
import { verifyToken } from "../utils/verifyToken";
const router = express.Router();

router.put("/update-user/:userId", verifyToken, update);

export default router;
