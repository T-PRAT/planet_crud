import fs from 'fs';
import getFilePath from '../utils/path.js';

export const findSatellites = () => {
	const data = fs.readFileSync(getFilePath("satellites"), 'utf-8');
	return JSON.parse(data);
};

export const findSatelliteById = (id) => {
	const satellites = findSatellites()
	return satellites.find((satellite) => satellite.id == id)
}

export const findSatellitesByPlanetName = (name) => {
	const satellites = findSatellites()
	return satellites.filter((satellite) => satellite.planet_name == name)
}

export const pushSatellite = (newSatellite) => {
	const satellites = findSatellites();
	satellites.push(newSatellite);
	fs.writeFileSync(getFilePath("satellites"), JSON.stringify(satellites, null, 2));
};

export const destroySatellite = (id) => {
	const satellites = findSatellites();
	const newSatellites = satellites.filter((satellite) => satellite.id != id);
	fs.writeFileSync(getFilePath("satellites"), JSON.stringify(newSatellites, null, 2));
}

export const updateSatellite = (id, content) => {
	const satellites = findSatellites();
	const index = satellites.findIndex((satellite) => satellite.id == id);
	satellites[index] = { id, ...content };
	fs.writeFileSync(getFilePath("satellites"), JSON.stringify(satellites, null, 2));
}
