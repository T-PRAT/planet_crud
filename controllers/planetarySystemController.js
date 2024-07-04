import { APIResponse } from "../utils/response.js";
import { findPlanetarySystems, findPlanetarySystemById, findPlanetarySystemsByGalaxyName, pushPlanetarySystem, destroyPlanetarySystem, updatePlanetarySystem } from "../models/planetarySystemModel.js";
import crypto from 'crypto';

export const getPlanetarySystems = (req, res) => {
	const planetarySystems = findPlanetarySystems();
	APIResponse(res, planetarySystems, "All planetary systems");
};

export const getPlanetarySystemById = (req, res) => {
	const planetarySystem = findPlanetarySystemById(req.params.id);
	APIResponse(res, planetarySystem, "Planetary system found");
};

export const getPlanetarySystemByGalaxyName = (req, res) => {
	const planetarySystems = findPlanetarySystemsByGalaxyName(req.params.name);
	APIResponse(res, planetarySystems, planetarySystems.length + " planetary systems found");
};

export const addPlanetarySystem = (req, res) => {
	const newPlanetarySystem = {
		id: crypto.randomUUID(),
		...req.body,
	};
	pushPlanetarySystem(newPlanetarySystem);
	APIResponse(res, newPlanetarySystem, "Planetary system added", 201);
};

export const deletePlanetarySystemById = (req, res) => {
	destroyPlanetarySystem(req.params.id);
	APIResponse(res, null, "A planetary system has been destroyed", 204);
};

export const updatePlanetarySystemById = (req, res) => {
	updatePlanetarySystem(req.params.id, req.body);
	APIResponse(res, { id: req.params.id, ...req.body }, "A planetary system has been updated", 202);
};
