import { Router } from "express";
import User from "../controllers/user.controllers";

const router = Router();

router.post("/signup", User.createUser);
export default router;
