import { APIResponse } from "../utils/response.js";
import { findSatellites, findSatelliteById, findSatellitesByPlanetName, pushSatellite, destroySatellite, updateSatellite } from "../models/satelliteModel.js";
import crypto from 'crypto';

export const getSatellites = (req, res, next) => {
	try {
		const satellites = findSatellites();
		if (!satellites) throw new Error("No satellites found");
		APIResponse(res, satellites, "All satellites");
	} catch (error) {
		next(error);
	}
};

export const getSatelliteById = (req, res, next) => {
	try {
		const satellite = findSatelliteById(req.params.id);
		if (!satellite) throw new Error("Satellite not found");
		APIResponse(res, satellite, "Satellite found");
	} catch (error) {
		next(error);
	}
};

export const getSatelliteByPlanetName = (req, res, next) => {
	try {
		const satellites = findSatellitesByPlanetName(req.params.name);
		if (!satellites) throw new Error("No satellites found");
		APIResponse(res, satellites, satellites.length + " satellites found");
	} catch (error) {
		next(error);
	}
};

export const addSatellite = (req, res, next) => {
	try {
		if (!req.body.name || !req.body.planet_name || !req.body.distance_to_planet || !req.body.radius) {
			throw new Error("Missing required fields");
		}
		const newSatellite = {
			id: crypto.randomUUID(),
			...req.body,
		};
		pushSatellite(newSatellite);
		APIResponse(res, newSatellite, "Satellite added", 201);
	} catch (error) {
		next(error);
	}
};

export const deleteSatelliteById = (req, res, next) => {
	try {
		destroySatellite(req.params.id);
		APIResponse(res, null, "A satellite has been destroyed", 204);
	} catch (error) {
		next(error);
	}
};

export const updateSatelliteById = (req, res, next) => {
	try {
		updateSatellite(req.params.id, req.body);
		APIResponse(res, { id: req.params.id, ...req.body }, "A satellite has been updated", 202);
	} catch (error) {
		next(error);
	}
};

