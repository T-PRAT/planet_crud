import { APIResponse } from "../utils/response";
import { Request, Response, NextFunction, response } from "express";
import { findUserByEmail, pushUser } from "../models/userModels";
import { hashPassword, verifyPassword } from "../utils/password";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { userSchema } from "../validation/users";
import { z } from "zod";
import { logger } from "../utils/logger";

const { JWT_SECRET, NODE_ENV } = env;

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = userSchema.parse(req.body);
    const emailAlreadyExists = await findUserByEmail(email);
    if (emailAlreadyExists) return APIResponse(res, [], "Email already exists", 400);

    const hash = await hashPassword(password);
    if (!hash) return APIResponse(res, [], "Invalid password", 400);
    const result = await pushUser({
      email: email,
      password: hash,
    });
    APIResponse(res, result[0].id, "You are registered", 201);
  } catch (error) {
    logger.error(error);
    if (error instanceof z.ZodError) {
      logger.error(`${res}, ${error.issues[0].message}`);
      return APIResponse(res, [], error.issues[0].message, 400);
    }
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (!user) return APIResponse(res, [], "Invalid email or password", 400);
    const passwordIsCorrect = await verifyPassword(req.body.password, user.password);
    if (!passwordIsCorrect) {
      logger.error("Invalid email or password");
      return APIResponse(res, [], "Invalid email or password", 400);
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET!, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, sameSite: "strict", secure: NODE_ENV === "production" });
    APIResponse(res, null, "You are logged in", 200);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
    APIResponse(res, null, "You are logged out", 200);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
