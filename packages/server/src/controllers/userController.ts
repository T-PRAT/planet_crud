import { APIResponse } from "../utils/response";
import { Request, Response, NextFunction } from "express";
import { findUsers, findUserById, pushUser, destroyUser } from "../models/userModels";
import { logger } from "../utils/logger";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await findUsers();
    if (!users) throw new Error("No users found");
    APIResponse(res, users, "All users");
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await findUserById(req.params.id);
    if (!result) throw new Error("User not found");
    APIResponse(res, result, "User found");
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
export const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await pushUser(req.body);
    APIResponse(res, result, "User added", 201);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
export const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await destroyUser(req.params.id);
    APIResponse(res, null, "A User has been destroyed", 204);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
