import viewRoutes from "./viewRoutes";
import planetRoutes from "./planetRoutes";
import satelliteRoutes from "./satelliteRoutes";
import planetarySystemRoutes from "./planetarySystemRoutes";
import galaxyRoutes from "./galaxyRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.use("/views", authMiddleware, viewRoutes);
router.use("/planets", authMiddleware, planetRoutes);
router.use("/satellites", authMiddleware, satelliteRoutes);
router.use("/planetarySystems", authMiddleware, planetarySystemRoutes);
router.use("/galaxies", authMiddleware, galaxyRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
