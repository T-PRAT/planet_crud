import { findPlanets, findPlanetById } from "../models/planetModel.js";
import { findSatellites, findSatelliteById } from "../models/satelliteModel.js";
import { findPlanetarySystems, findPlanetarySystemById } from "../models/planetarySystemModel.js";
import { findGalaxies, findGalaxyById } from "../models/galaxyModel.js";

export const viewHome = (req, res) => {
	res.render('index', { title: 'Home' });
}

export const viewPlanets = (req, res) => {
	const planets = findPlanets();
	res.render('planets/planets', { title: 'Planets', planets });
}

export const viewPlanetById = (req, res) => {
	const planet = findPlanetById(req.params.id);
	res.render('planets/planetById', { title: 'Planet', planet });
}
export const viewSatellites = (req, res) => {
	const satellites = findSatellites();
	res.render('satellites/satellites', { title: 'Satellites', satellites });
}

export const viewSatelliteById = (req, res) => {
	const satellite = findSatelliteById(req.params.id);
	res.render('satellites/satelliteById', { title: 'Satellite', satellite });
}

export const viewPlanetarySystem = (req, res) => {
	const planetarySystems = findPlanetarySystems();
	res.render('planetary_system/planetary_systems', { title: 'Planetary systems', planetarySystems })
}

export const viewPlanetarySystemById = (req, res) => {
	const planetarySystem = findPlanetarySystemById(req.params.id);
	res.render('planetary_system/planetary_systemById', { title: 'Planetary system', planetarySystem })
}
export const viewGalaxies = (req, res) => {
	const galaxies = findGalaxies();
	res.render('galaxy/galaxies', { title: 'Galaxies', galaxies });
}

export const viewGalaxyById = (req, res) => {
	const galaxy = findGalaxyById(req.params.id);
	res.render('galaxy/galaxyById', { title: 'Galaxy', galaxy })
}
