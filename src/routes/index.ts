import viewRoutes from "./viewRoutes";
import planetRoutes from "./planetRoutes";
import satelliteRoutes from "./satelliteRoutes";
import planetarySystemRoutes from "./planetarySystemRoutes";
import galaxyRoutes from "./galaxyRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { Router } from "express";

const router = Router();

router.use("/views", viewRoutes);
router.use("/planets", planetRoutes);
router.use("/satellites", satelliteRoutes);
router.use("/planetarySystems", planetarySystemRoutes);
router.use("/galaxies", galaxyRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
