import { APIResponse } from "../utils/response";
import { findGalaxies, findGalaxyById, pushGalaxy, destroyGalaxy, updateGalaxy } from "../models/galaxyModel";
import { Request, Response, NextFunction } from "express";
import { galaxySchema } from "../validation/galaxy";
import { z } from "zod";

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
    const galaxy = galaxySchema.parse(req.body);
    const result = await pushGalaxy(galaxy);
    APIResponse(res, result, "Galaxy added", 201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return APIResponse(res, [], error.issues[0].message, 400);
    }
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
    const galaxy = galaxySchema.parse(req.body);
    const result = await updateGalaxy(req.params.id, galaxy);
    APIResponse(res, result, "A galaxy has been updated", 202);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return APIResponse(res, [], error.issues[0].message, 400);
    }
    next(error);
  }
};
