import express from "express";
const router = express.Router();
import { getBook } from "../controllers/book";

router.post("/book", getBook);

export default router;
