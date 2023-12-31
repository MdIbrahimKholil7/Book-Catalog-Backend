import { Router } from "express";
import User from "../controllers/user.controllers";

const router = Router();

router.post("/signup", User.createUser);
router.post("/login", User.loginUser);
export default router;
