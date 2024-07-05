import { Router } from "express";
import { getPlanetarySystems, getPlanetarySystemById, getPlanetarySystemByGalaxyName, addPlanetarySystem, deletePlanetarySystemById, updatePlanetarySystemById } from "../controllers/planetarySystemController.js";

const router = Router();

router.get('/', getPlanetarySystems);
router.get('/:id', getPlanetarySystemById);
router.get('/galaxy/:name', getPlanetarySystemByGalaxyName);
router.post('/', addPlanetarySystem);
router.delete('/:id', deletePlanetarySystemById);
router.put('/:id', updatePlanetarySystemById);

export default router;
