import { Router } from "express";
import { getSatellite, getSatelliteById, addSatellite, deleteSatelliteById, updateSatelliteById } from "../controllers/satelliteController.js"
const router = Router();

router.get('/', getSatellite);

router.get('/:id', getSatelliteById);

router.post('/', addSatellite);

router.delete('/:id', deleteSatelliteById);

router.put('/:id', updateSatelliteById);

export default router;
