import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { APIResponse } from "../utils/response";
import { verifyRefreshToken, generateAccessToken, generateRefreshToken } from "../utils/token";
import { findUserById, updateUser } from "../models/userModels";

const { ACCESS_TOKEN_SECRET } = env;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { token, refreshToken } = req.cookies;

  if (!token && !refreshToken) {
    return APIResponse(res, [], "You are not logged in", 401);
  }
  if (token) {
    try {
      jwt.verify(token, ACCESS_TOKEN_SECRET!);
      return next();
    } catch (error) {
      res.clearCookie("token");
      res.clearCookie("refreshToken");
      console.error("Invalid Token", error);
      return null;
    }
  }
  const userId = verifyRefreshToken(refreshToken);
  const user = await findUserById(userId);

  if (!userId || !user || user.refreshToken !== refreshToken) {
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    return APIResponse(res, [], "Invalid token", 403);
  }
  const newToken = generateAccessToken(user.id);
  const newRefreshToken = generateRefreshToken(user.id);

  await updateUser(user.id, { refreshToken: newRefreshToken });

  res.cookie("token", newToken, { httpOnly: true, sameSite: "strict", secure: env.NODE_ENV === "production" });
  res.cookie("refreshToken", newRefreshToken, { httpOnly: true, sameSite: "strict", secure: env.NODE_ENV === "production" });

  next();
};
