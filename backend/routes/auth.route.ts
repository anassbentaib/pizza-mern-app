import express from "express";
import { test,signup } from "../controllers/auth.controller";
const router = express.Router();

router.get("/test", test);
router.post("/signup", signup)

export default router;
