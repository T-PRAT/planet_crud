import { APIResponse } from "../utils/response.js";
import { findSatellites, findSatelliteById, findSatellitesByPlanetName, pushSatellite, destroySatellite, updateSatellite } from "../models/satelliteModel.js";
import crypto from 'crypto';

export const getSatellites = (req, res) => {
	const satellites = findSatellites();
	APIResponse(res, satellites, "All satellites");
};

export const getSatelliteById = (req, res) => {
	const satellite = findSatelliteById(req.params.id);
	APIResponse(res, satellite, "Satellite found");
};

export const getSatelliteByPlanetName = (req, res) => {
	const satellites = findSatellitesByPlanetName(req.params.name);
	APIResponse(res, satellites, satellites.length + " satellites found");
};

export const addSatellite = (req, res) => {
	const newSatellite = {
		id: crypto.randomUUID(),
		...req.body,
	};
	pushSatellite(newSatellite);
	APIResponse(res, newSatellite, "Satellite added", 201);
};

export const deleteSatelliteById = (req, res) => {
	destroySatellite(req.params.id);
	APIResponse(res, null, "A satellite has been destroyed", 204);
};

export const updateSatelliteById = (req, res) => {
	updateSatellite(req.params.id, req.body);
	APIResponse(res, { id: req.params.id, ...req.body }, "A satellite has been updated", 202);
};
