import { Router } from "express";
import { getSatellites, getSatelliteById, getSatelliteByPlanetName, addSatellite, deleteSatelliteById, updateSatelliteById } from "../controllers/satelliteController.js";

const router = Router();

router.get('/', getSatellites);
router.get('/:id', getSatelliteById);
router.get('/planet/:name', getSatelliteByPlanetName);
router.post('/', addSatellite);
router.delete('/:id', deleteSatelliteById);
router.put('/:id', updateSatelliteById);

export default router;
