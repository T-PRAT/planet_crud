import { APIResponse } from "../utils/response";
import {
  findPlanetarySystems,
  findPlanetarySystemById,
  findPlanetarySystemsByGalaxyId,
  pushPlanetarySystem,
  destroyPlanetarySystem,
  updatePlanetarySystem,
} from "../models/planetarySystemModel";
import { Request, Response, NextFunction } from "express";

export const getPlanetarySystems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findPlanetarySystems();
    if (!result) throw new Error("No planetary systems found");
    APIResponse(res, result, "All planetary systems");
  } catch (error) {
    next(error);
  }
};

export const getPlanetarySystemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findPlanetarySystemById(req.params.id);
    if (!result) throw new Error("Planetary system not found");
    APIResponse(res, result, "Planetary system found");
  } catch (error) {
    next(error);
  }
};

export const getPlanetarySystemByGalaxyName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findPlanetarySystemsByGalaxyId(req.params.name);
    if (!result) throw new Error("No planetary systems found in this galaxy");
    APIResponse(res, result, "planetary systems found");
  } catch (error) {
    next(error);
  }
};

export const addPlanetarySystem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPlanetarySystem = {
      ...req.body,
    };
    const result = await pushPlanetarySystem(newPlanetarySystem);
    APIResponse(res, result, "Planetary system added", 201);
  } catch (error) {
    next(error);
  }
};

export const deletePlanetarySystemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await destroyPlanetarySystem(req.params.id);
    APIResponse(res, result, "A planetary system has been destroyed", 204);
  } catch (error) {
    next(error);
  }
};

export const updatePlanetarySystemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updatePlanetarySystem(req.params.id, req.body);
    APIResponse(res, result, "A planetary system has been updated", 202);
  } catch (error) {
    next(error);
  }
};
