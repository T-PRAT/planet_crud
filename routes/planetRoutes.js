import { Router } from "express";
import { getPlanets, getPlanetById, addPlanet, deletePlanetById, updatePlanetById } from "../controllers/planetController.js"

const router = Router();

router.get('/', getPlanets);

router.get('/:id', getPlanetById);

router.post('/', addPlanet);

router.delete('/:id', deletePlanetById);

router.put('/:id', updatePlanetById);

export default router;
