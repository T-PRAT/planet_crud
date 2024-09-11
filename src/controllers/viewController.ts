import { findPlanets, findPlanetById } from "../models/planetModel";
import { findSatellites, findSatelliteById } from "../models/satelliteModel";
import { findPlanetarySystems, findPlanetarySystemById } from "../models/planetarySystemModel";
import { findGalaxies, findGalaxyById } from "../models/galaxyModel";
import { Request, Response } from "express";

export const viewHome = async (req: Request, res: Response) => {
  res.render("index", { title: "Home" });
};

export const viewPlanets = async (req: Request, res: Response) => {
  const planets = findPlanets();
  res.render("planets/planets", { title: "Planets", planets });
};

export const viewPlanetById = async (req: Request, res: Response) => {
  const planet = findPlanetById(req.params.id);
  res.render("planets/planetById", { title: "Planet", planet });
};
export const viewSatellites = async (req: Request, res: Response) => {
  const satellites = findSatellites();
  res.render("satellites/satellites", { title: "Satellites", satellites });
};

export const viewSatelliteById = async (req: Request, res: Response) => {
  const satellite = findSatelliteById(req.params.id);
  res.render("satellites/satelliteById", { title: "Satellite", satellite });
};

export const viewPlanetarySystem = async (req: Request, res: Response) => {
  const planetarySystems = findPlanetarySystems();
  res.render("planetary_system/planetary_systems", { title: "Planetary systems", planetarySystems });
};

export const viewPlanetarySystemById = async (req: Request, res: Response) => {
  const planetarySystem = findPlanetarySystemById(req.params.id);
  res.render("planetary_system/planetary_systemById", { title: "Planetary system", planetarySystem });
};
export const viewGalaxies = async (req: Request, res: Response) => {
  const galaxies = findGalaxies();
  res.render("galaxy/galaxies", { title: "Galaxies", galaxies });
};

export const viewGalaxyById = async (req: Request, res: Response) => {
  const galaxy = findGalaxyById(req.params.id);
  res.render("galaxy/galaxyById", { title: "Galaxy", galaxy });
};
