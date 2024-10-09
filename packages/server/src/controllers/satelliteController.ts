import { APIResponse } from "../utils/response";
import {
  findSatellites,
  findSatelliteById,
  findSatellitesByPlanetId,
  pushSatellite,
  destroySatellite,
  updateSatellite,
} from "../models/satelliteModel";
import { logger } from "../utils/logger";
import { Request, Response, NextFunction } from "express";

export const getSatellites = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satellites = await findSatellites();
    if (!satellites) throw new Error("No satellites found");
    APIResponse(res, satellites, "All satellites");
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const getSatelliteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satellite = await findSatelliteById(req.params.id);
    if (!satellite) throw new Error("Satellite not found");
    APIResponse(res, satellite, "Satellite found");
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const getSatelliteByPlanetName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const satellites = await findSatellitesByPlanetId(req.params.id);
    if (!satellites) throw new Error("No satellites found");
    APIResponse(res, satellites, " satellites found");
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const addSatellite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newSatellite = {
      ...req.body,
    };
    const result = await pushSatellite(newSatellite);
    APIResponse(res, result, "Satellite added", 201);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const deleteSatelliteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await destroySatellite(req.params.id);
    APIResponse(res, null, "A satellite has been destroyed", 204);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const updateSatelliteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateSatellite(req.params.id, req.body);
    APIResponse(res, { id: req.params.id, ...req.body }, "A satellite has been updated", 202);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
