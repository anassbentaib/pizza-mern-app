import express from "express";
import { getCustomers } from "../controllers/customer.controller";
const router = express.Router();

router.get("/get-customers", getCustomers); 

export default router;
