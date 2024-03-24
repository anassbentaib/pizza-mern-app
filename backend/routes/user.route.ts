import express from "express";
import { update, SignOut } from "../controllers/user.controller";
import { verifyToken } from "../utils/verifyToken";
const router = express.Router();

router.put("/update-user/:userId", verifyToken, update);
router.post("/signout", SignOut);

export default router;
