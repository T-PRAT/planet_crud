import { APIResponse } from "../utils/response";
import { findPlanets, findPlanetById, findPlanetsBySolarSystemId, pushPlanet, destroyPlanet, updatePlanet } from "../models/planetModel";
import { Request, Response, NextFunction } from "express";

export const getPlanets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const planets = await findPlanets();
    if (!planets) throw new Error("No planets found");
    APIResponse(res, planets, "All planets");
  } catch (error) {
    next(error);
  }
};

export const getPlanetById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const planet = await findPlanetById(req.params.id);
    if (!planet) throw new Error("Planet not found");
    APIResponse(res, planet, "Planet found");
  } catch (error) {
    next(error);
  }
};

export const getPlanetBySolarSystemName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const planets = await findPlanetsBySolarSystemId(req.params.id);
    if (!planets) throw new Error("No planets found");
    APIResponse(res, planets, " planets found");
  } catch (error) {
    next(error);
  }
};

export const addPlanet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPlanet = {
      ...req.body,
    };
    const result = await pushPlanet(newPlanet);
    APIResponse(res, result, "Planet added", 201);
  } catch (error) {
    next(error);
  }
};

export const deletePlanetById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await destroyPlanet(req.params.id);
    APIResponse(res, result, "A planet has been destroyed", 204);
  } catch (error) {
    next(error);
  }
};

export const updatePlanetById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updatePlanet(req.params.id, req.body);
    APIResponse(res, result, "A planet has been updated", 202);
  } catch (error) {
    next(error);
  }
};
