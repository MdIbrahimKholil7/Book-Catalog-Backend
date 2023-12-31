import { Router } from "express";
import User from "../controllers/user.controllers";
import Book from "../controllers/book.controller";
import authenticate from "../middlewares/authinticate";

const router = Router();

router.post("/", authenticate, Book.createBook);
router.get("/", Book.getBook);
router.get("/:id", Book.getBookDetails);
router.put("/:id", authenticate, Book.updateBook);
router.post("/review/:id", authenticate, Book.addBookReview);
export default router;
