import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

const { JWT_SECRET } = env;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "You are not logged in" });
    const decoded = jwt.verify(token, JWT_SECRET!);
    res.locals.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
