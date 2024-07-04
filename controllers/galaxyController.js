import { APIResponse } from "../utils/response.js";
import { findGalaxies, findGalaxyById, pushGalaxy, destroyGalaxy, updateGalaxy } from "../models/galaxyModel.js";
import crypto from 'crypto';

export const getGalaxies = (req, res) => {
	const galaxies = findGalaxies();
	APIResponse(res, galaxies, "All galaxies");
};

export const getGalaxyById = (req, res) => {
	const galaxy = findGalaxyById(req.params.id);
	APIResponse(res, galaxy, "Galaxy found");
};

export const addGalaxy = (req, res) => {
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
