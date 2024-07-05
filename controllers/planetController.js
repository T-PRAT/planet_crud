import { APIResponse } from "../utils/response.js";
import { findPlanets, findPlanetById, findPlanetsBySolarSystemName, pushPlanet, destroyPlanet, updatePlanet } from "../models/planetModel.js";
import crypto from 'crypto';

export const getPlanets = (req, res, next) => {
	try {
		const planets = findPlanets();
		if (!planets) throw new Error("No planets found");
		APIResponse(res, planets, "All planets");
	} catch (error) {
		next(error);
	}
};

export const getPlanetById = (req, res, next) => {
	try {
		const planet = findPlanetById(req.params.id);
		if (!planet) throw new Error("Planet not found");
		APIResponse(res, planet, "Planet found");
	} catch (error) {
		next(error);
	}
};

export const getPlanetBySolarSystemName = (req, res, next) => {
	try {
		const planets = findPlanetsBySolarSystemName(req.params.name);
		if (!planets) throw new Error("No planets found");
		APIResponse(res, planets, planets.length + " planets found");
	} catch (error) {
		next(error);
	}
};

export const addPlanet = (req, res, next) => {
	try {
		if (!req.body.name || !req.body.type || !req.body.distance_to_star || !req.body.radius || !req.body.mass || !req.body.planetary_system) {
			throw new Error("Missing required fields");
		}
		const newPlanet = {
			id: crypto.randomUUID(),
			...req.body,
		};
		pushPlanet(newPlanet);
		APIResponse(res, newPlanet, "Planet added", 201);
	} catch (error) {
		next(error);
	}
};

export const deletePlanetById = (req, res, next) => {
	try {
		destroyPlanet(req.params.id);
		APIResponse(res, null, "A planet has been destroyed", 204);
	} catch (error) {
		next(error);
	}
};

export const updatePlanetById = (req, res, next) => {
	try {
		updatePlanet(req.params.id, req.body);
		APIResponse(res, { id: req.params.id, ...req.body }, "A planet has been updated", 202);
	} catch (error) {
		next(error);
	}
};

