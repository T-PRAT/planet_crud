import { Router } from "express";
import { getUsers, getUserById, addUser, deleteUserById } from "../controllers/userController";
const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.delete("/:id", deleteUserById);

export default router;
