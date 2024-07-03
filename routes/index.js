import planetRoutes from "./planetRoutes.js"
import satelliteRoutes from "./satelliteRoutes.js"
import { Router } from 'express';

const router = Router();

router.use('/planets', planetRoutes);
router.use('/satellites', satelliteRoutes);

export default router;
