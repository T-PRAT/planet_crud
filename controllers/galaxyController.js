import { APIResponse } from "../utils/response.js";
import { findGalaxies, findGalaxyById, pushGalaxy, destroyGalaxy, updateGalaxy } from "../models/galaxyModel.js";
import crypto from 'crypto';

export const getGalaxies = (req, res, next) => {
	try {
		const galaxies = findGalaxies();
		if (!galaxies) throw new Error("No galaxies found");
		APIResponse(res, galaxies, galaxies.length + " galaxies found");
	} catch (error) {
		next(error);
	}
};

export const getGalaxyById = (req, res, next) => {
	try {
		const galaxy = findGalaxyById(req.params.id);
		if (!galaxy) throw new Error("Galaxy not found");
		APIResponse(res, galaxy, "Galaxy found");
	} catch (error) {
		next(error);
	}
};

export const addGalaxy = (req, res, next) => {
	try {
		if (!req.body.name || !req.body.type || !req.body.age || !req.body.diameter) {
			throw new Error("Missing required fields");
		}
		const newGalaxy = {
			id: crypto.randomUUID(),
			...req.body,
		};
		pushGalaxy(newGalaxy);
		APIResponse(res, newGalaxy, "Galaxy added", 201);
	} catch (error) {
		next(error);
	}
};

export const deleteGalaxyById = (req, res, next) => {
	try {
		destroyGalaxy(req.params.id);
		APIResponse(res, null, "A galaxy has been destroyed", 204);
	} catch (error) {
		next(error);
	}
};

export const updateGalaxyById = (req, res, next) => {
	try {
		updateGalaxy(req.params.id, req.body);
		APIResponse(res, { id: req.params.id, ...req.body }, "A galaxy has been updated", 202);
	} catch (error) {
		next(error);
	}
};
