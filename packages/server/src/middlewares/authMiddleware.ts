import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { APIResponse } from "../utils/response";

const { ACCESS_TOKEN_SECRET } = env;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "You are not logged in" });
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET!);
    res.locals.user = decoded;
    next();
  } catch (error) {
    return APIResponse(res, [], "Invalid token", 401);
  }
};
