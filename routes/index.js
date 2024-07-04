import viewRoutes from "./viewRoutes.js"
import planetRoutes from "./planetRoutes.js"
import satelliteRoutes from "./satelliteRoutes.js"
import planetarySystemRoutes from "./planetarySystemRoutes.js"
import galaxyRoutes from "./galaxyRoutes.js"
import { Router } from 'express';

const router = Router();

router.use('/views', viewRoutes);
router.use('/planets', planetRoutes);
router.use('/satellites', satelliteRoutes);
router.use('/planetarySystems', planetarySystemRoutes);
router.use('/galaxies', galaxyRoutes);

export default router;
