import { Router } from "express";
import {
  getPlanets,
  getPlanetById,
  getPlanetBySolarSystemName,
  addPlanet,
  deletePlanetById,
  updatePlanetById,
} from "../controllers/planetController";

const router = Router();

router.get("/", getPlanets);
router.get("/:id", getPlanetById);
router.get("/solarSystem/:name", getPlanetBySolarSystemName);
router.post("/", addPlanet);
router.delete("/:id", deletePlanetById);
router.put("/:id", updatePlanetById);

export default router;
