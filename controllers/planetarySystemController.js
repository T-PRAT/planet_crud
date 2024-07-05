import { APIResponse } from "../utils/response.js";
import { findPlanetarySystems, findPlanetarySystemById, findPlanetarySystemsByGalaxyName, pushPlanetarySystem, destroyPlanetarySystem, updatePlanetarySystem } from "../models/planetarySystemModel.js";
import crypto from 'crypto';

export const getPlanetarySystems = (req, res, next) => {
	try {
		const planetarySystems = findPlanetarySystems();
		if (!planetarySystems) throw new Error("No planetary systems found");
		APIResponse(res, planetarySystems, "All planetary systems");
	} catch (error) {
		next(error);
	}
};

export const getPlanetarySystemById = (req, res, next) => {
	try {
		const planetarySystem = findPlanetarySystemById(req.params.id);
		if (!planetarySystem) throw new Error("Planetary system not found");
		APIResponse(res, planetarySystem, "Planetary system found");
	} catch (error) {
		next(error);
	}
};

export const getPlanetarySystemByGalaxyName = (req, res) => {
	try {
		const planetarySystems = findPlanetarySystemsByGalaxyName(req.params.name);
		if (!planetarySystems) throw new Error("No planetary systems found");
		APIResponse(res, planetarySystems, planetarySystems.length + " planetary systems found");
	} catch (error) {
		next(error);
	}
};

export const addPlanetarySystem = (req, res, next) => {
	try {
		if (!req.body.name || !req.body.star || !req.body.star_type || !req.body.age || !req.body.galaxy_name) {
			throw new Error("Missing required fields");
		}
		const newPlanetarySystem = {
			id: crypto.randomUUID(),
			...req.body,
		};
		pushPlanetarySystem(newPlanetarySystem, next);
		APIResponse(res, newPlanetarySystem, "Planetary system added", 201);
	} catch (error) {
		next(error);
	}
};

export const deletePlanetarySystemById = (req, res, next) => {
	try {
		destroyPlanetarySystem(req.params.id);
		APIResponse(res, null, "A planetary system has been destroyed", 204);
	} catch (error) {
		next(error);
	}
};

export const updatePlanetarySystemById = (req, res, next) => {
	try {
		updatePlanetarySystem(req.params.id, req.body);
		APIResponse(res, { id: req.params.id, ...req.body }, "A planetary system has been updated", 202);
	} catch (error) {
		next(error);
	}
};
