import { APIResponse } from "../utils/response.js";
import { findGalaxies, findGalaxyById, pushGalaxy, destroyGalaxy, updateGalaxy } from "../models/galaxyModel.js";
import crypto from 'crypto';

export const getGalaxies = (req, res) => {
	const galaxies = findGalaxies();
	galaxies ? APIResponse(res, galaxies, galaxies.length + " galaxies found") : APIResponse(res, null, "No galaxies found");
};

export const getGalaxyById = (req, res) => {
	const galaxy = findGalaxyById(req.params.id);
	galaxy ? APIResponse(res, galaxy, "Galaxy found") : APIResponse(res, null, "Galaxy not found");
};

export const addGalaxy = (req, res) => {
	if (!req.body.name || !req.body.type || !req.body.age || !req.body.diameter) {
		APIResponse(res, null, "Missing required fields", 400);
		return;
	}
	const newGalaxy = {
		id: crypto.randomUUID(),
		...req.body,
	};
	pushGalaxy(newGalaxy);
	APIResponse(res, newGalaxy, "Galaxy added", 201);
};

export const deleteGalaxyById = (req, res) => {
	destroyGalaxy(req.params.id);
	APIResponse(res, null, "A galaxy has been destroyed", 204);
};

export const updateGalaxyById = (req, res) => {
	updateGalaxy(req.params.id, req.body);
	APIResponse(res, { id: req.params.id, ...req.body }, "A galaxy has been updated", 202);
};
