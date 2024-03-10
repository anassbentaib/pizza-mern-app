import express from "express";
import { test,signup ,signin} from "../controllers/auth.controller";
const router = express.Router();

router.get("/test", test);
router.post("/signup", signup)
router.post("/signin", signin)

export default router;
