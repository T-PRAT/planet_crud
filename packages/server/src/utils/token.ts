import jwt from "jsonwebtoken";
import { env } from "../config/env";

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRATION, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRATION } = env;

export const generateAccessToken = (id: string) => {
  return jwt.sign({ id }, ACCESS_TOKEN_SECRET!, { expiresIn: ACCESS_TOKEN_EXPIRATION });
};

export const generateRefreshToken = (id: string) => {
  return jwt.sign({ id }, REFRESH_TOKEN_SECRET!, { expiresIn: REFRESH_TOKEN_EXPIRATION });
};

export const verifyRefreshToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET!);
    return decoded;
  } catch (error) {
    throw new Error("Error verifying refresh token");
  }
};
