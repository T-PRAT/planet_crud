import { APIResponse } from "../utils/response.js";
import { findPlanets, findPlanetById, pushPlanet, destroyPlanet, updatePlanet } from "../models/planetModel.js";
import crypto from 'crypto';

export const getPlanets = (req, res) => {
	const planets = findPlanets();
	APIResponse(res, planets, "All planets");
};

export const getPlanetById = (req, res) => {
	const planet = findPlanetById(req.params.id);
	APIResponse(res, planet, "Planet found");
};

export const addPlanet = (req, res) => {
	const newPlanet = {
		id: crypto.randomUUID(),
		...req.body,
	};
	pushPlanet(newPlanet);
	APIResponse(res, newPlanet, "Planet added", 201);
};

export const deletePlanetById = (req, res) => {
	destroyPlanet(req.params.id);
	APIResponse(res, null, "A planet has been destroyed", 204);
};

export const updatePlanetById = (req, res) => {
	updatePlanet(req.params.id, req.body);
	APIResponse(res, { id: req.params.id, ...req.body }, "A planet has been updated", 202);
};

