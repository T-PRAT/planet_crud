import { APIResponse } from "../utils/response";
import { findGalaxies, findGalaxyById, pushGalaxy, destroyGalaxy, updateGalaxy } from "../models/galaxyModel";
import { Request, Response, NextFunction } from "express";

export const getGalaxies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const galaxies = await findGalaxies();
    if (!galaxies) throw new Error("No galaxies found");
    APIResponse(res, galaxies, " galaxies found");
  } catch (error) {
    next(error);
  }
};

export const getGalaxyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findGalaxyById(req.params.id);
    if (!result) throw new Error("Galaxy not found");
    APIResponse(res, result, "Galaxy found");
  } catch (error) {
    next(error);
  }
};

export const addGalaxy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newGalaxy = {
      ...req.body,
    };
    const result = await pushGalaxy(newGalaxy);
    APIResponse(res, result, "Galaxy added", 201);
  } catch (error) {
    next(error);
  }
};

export const deleteGalaxyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await destroyGalaxy(req.params.id);
    APIResponse(res, result, "A galaxy has been destroyed", 204);
  } catch (error) {
    next(error);
  }
};

export const updateGalaxyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updateGalaxy(req.params.id, req.body);
    APIResponse(res, result, "A galaxy has been updated", 202);
  } catch (error) {
    next(error);
  }
};
