import { Router } from "express";
import { login, register, logout } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

export default router;
