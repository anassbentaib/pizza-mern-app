import express from "express";
import { getGeography } from "../controllers/geography.controller";
const router = express.Router();

router.get("/", getGeography); 

export default router;
