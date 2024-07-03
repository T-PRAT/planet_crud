import { APIResponse } from "../utils/response.js";
import { findPlanets } from "../models/planetModel.js";

export const getPlanets = (req, res) => {
	const planets = findPlanets();
	APIResponse(response, planets, "All planets", 200);
};

export const getPlanetById = () => { };

export const addPlanet = () => { };

export const deletePlanetById = () => { };

export const updatePlanetById = () => { };

