import fs from 'fs';
import getFilePath from '../utils/path.js';

export const findPlanets = () => {
	const data = fs.readFileSync(getFilePath("planets"), 'utf-8');
	return JSON.parse(data);
};

export const findPlanetById = (id) => {
	const planets = findPlanets()
	return planets.find((planet) => planet.id == id)
}

export const pushPlanet = (newPlanet) => {
	const planets = findPlanets();
	planets.push(newPlanet);
	fs.writeFileSync(getFilePath("planets"), JSON.stringify(planets, null, 2));
};

export const destroyPlanet = (id) => {
	const planets = findPlanets();
	const newPlanets = planets.filter((planet) => planet.id != id);
	fs.writeFileSync(getFilePath("planets"), JSON.stringify(newPlanets, null, 2));
}

export const updatePlanet = (id, content) => {
	const planets = findPlanets();
	const index = planets.findIndex((planet) => planet.id == id);
	planets[index] = { id, ...content };
	fs.writeFileSync(getFilePath("planets"), JSON.stringify(planets, null, 2));
}
