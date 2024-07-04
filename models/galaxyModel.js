import fs from 'fs';
import getFilePath from '../utils/path.js';

export const findGalaxies = () => {
	const data = fs.readFileSync(getFilePath("galaxies"), 'utf-8');
	return JSON.parse(data);
};

export const findGalaxyById = (id) => {
	const galaxies = findGalaxies()
	return galaxies.find((galaxy) => galaxy.id == id)
}

export const pushGalaxy = (newGalaxy) => {
	const galaxies = findGalaxies();
	galaxies.push(newGalaxy);
	fs.writeFileSync(getFilePath("galaxies"), JSON.stringify(galaxies, null, 2));
};

export const destroyGalaxy = (id) => {
	const galaxies = findGalaxies();
	const newGalaxies = galaxies.filter((galaxy) => galaxy.id != id);
	fs.writeFileSync(getFilePath("galaxies"), JSON.stringify(newGalaxies, null, 2));
}

export const updateGalaxy = (id, content) => {
	const galaxies = findGalaxies();
	const index = galaxies.findIndex((galaxy) => galaxy.id == id);
	galaxies[index] = { id, ...content };
	fs.writeFileSync(getFilePath("galaxies"), JSON.stringify(galaxies, null, 2));
}
