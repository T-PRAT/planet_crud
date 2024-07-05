import { Router } from "express";
import { getGalaxies, getGalaxyById, addGalaxy, deleteGalaxyById, updateGalaxyById } from "../controllers/galaxyController.js"

const router = Router();

router.get('/', getGalaxies);
router.get('/:id', getGalaxyById);
router.post('/', addGalaxy);
router.delete('/:id', deleteGalaxyById);
router.put('/:id', updateGalaxyById);

export default router;
