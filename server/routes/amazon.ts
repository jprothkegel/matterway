import express from "express";
const router = express.Router();
import { openAmazon } from "../controllers/amazon";

router.post("/amazon", openAmazon);

export default router;
