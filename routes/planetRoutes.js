import { Router } from "express";
import { getPlanet, getPlanetById, addPlanet, deletePlanetById, updatePlanetById } from "../controllers/planetController.js"

const router = Router();

router.get('/', getPlanet);

router.get('/:id', getPlanetById);

router.post('/', addPlanet);

router.delete('/:id', deletePlanetById);

router.put('/:id', updatePlanetById);

export default router;
