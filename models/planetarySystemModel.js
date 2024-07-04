import fs from 'fs';
import getFilePath from '../utils/path.js';

export const findPlanetarySystems = () => {
	const data = fs.readFileSync(getFilePath("planetarySystems"), 'utf-8');
	return JSON.parse(data);
};

export const findPlanetarySystemById = (id) => {
	const planetarySystems = findPlanetarySystems()
	return planetarySystems.find((planetarySystem) => planetarySystem.id == id)
}

export const findPlanetarySystemsByGalaxyName = (name) => {
	const planetarySystems = findPlanetarySystems()
	return planetarySystems.filter((planetarySystem) => planetarySystem.galaxy_name == name)
}

export const pushPlanetarySystem = (newPlanetarySystem) => {
	const planetarySystems = findPlanetarySystems();
	planetarySystems.push(newPlanetarySystem);
	fs.writeFileSync(getFilePath("planetarySystems"), JSON.stringify(planetarySystems, null, 2));
};

export const destroyPlanetarySystem = (id) => {
	const planetarySystems = findPlanetarySystems();
	const newPlanetarySystems = planetarySystems.filter((planetarySystem) => planetarySystem.id != id);
	fs.writeFileSync(getFilePath("planetarySystems"), JSON.stringify(newPlanetarySystems, null, 2));
}

export const updatePlanetarySystem = (id, content) => {
	const planetarySystems = findPlanetarySystems();
	const index = planetarySystems.findIndex((planetarySystem) => planetarySystem.id == id);
	planetarySystems[index] = { id, ...content };
	fs.writeFileSync(getFilePath("planetarySystems"), JSON.stringify(planetarySystems, null, 2));
}
