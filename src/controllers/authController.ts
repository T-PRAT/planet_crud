import { APIResponse } from "../utils/response";
import { Request, Response, NextFunction, response } from "express";
import { findUserByEmail, pushUser } from "../models/userModels";
import { hashPassword, verifyPassword } from "../utils/password";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

const { JWT_SECRET, NODE_ENV } = env;

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const emailAlreadyExists = await findUserByEmail(req.body.email);
    if (emailAlreadyExists) return APIResponse(res, [], "Email already exists", 400);

    const hash = await hashPassword(req.body.password);
    if (!hash) return APIResponse(res, [], "Invalid password", 400);
    const result = await pushUser({
      email: req.body.email,
      password: hash,
    });
    APIResponse(res, result[0].id, "You are registered", 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (!user) return APIResponse(res, [], "Invalid email or password", 400);
    const passwordIsCorrect = await verifyPassword(req.body.password, user.password);
    if (!passwordIsCorrect) return APIResponse(res, [], "Invalid email or password", 400);

    const token = jwt.sign({ id: user.id }, JWT_SECRET!, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, sameSite: "strict", secure: NODE_ENV === "production" });
    APIResponse(res, null, "You are logged in", 200);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
    APIResponse(res, null, "You are logged out", 200);
  } catch (error) {
    next(error);
  }
};
