import { Router } from "express";
import User from "../controllers/user.controllers";
import Book from "../controllers/book.controller";
import authenticate from "../middlewares/authinticate";

const router = Router();

router.post("/", authenticate, Book.createBook);
router.get("/", Book.getBook);
export default router;
