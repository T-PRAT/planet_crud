import fs from 'fs';
import path from 'path';


planetFilePath = "../data/planets.json"

export const findPlanets = () => {
	console.log("findPlanet");
	const data = fs.readFileSync(planetFilePath, 'utf-8');
	return JSON.parse(data);
};
