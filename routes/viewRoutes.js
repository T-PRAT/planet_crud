import { Router } from "express";
import { viewHome, viewPlanets, viewPlanetById, viewSatellites, viewSatelliteById, viewPlanetarySystem, viewPlanetarySystemById, viewGalaxies, viewGalaxyById } from "../controllers/viewController.js";

const router = Router();

router.get('/', viewHome);
router.get('/planets', viewPlanets);
router.get('/planets/:id', viewPlanetById);
router.get('/satellites', viewSatellites);
router.get('/satellites/:id', viewSatelliteById);
router.get('/systems', viewPlanetarySystem);
router.get('/systems/:id', viewPlanetarySystemById);
router.get('/galaxies', viewGalaxies);
router.get('/galaxies/:id', viewGalaxyById);

export default router;
