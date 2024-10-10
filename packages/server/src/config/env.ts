import { config } from "dotenv";

config({ path: ".env" });

export const env = {
  DATABASE_URL: process.env.DATABASE_URL,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "QWERTY789",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "QWERTY789",

  ACCESS_TOKEN_EXPIRATION: process.env.ACCESS_TOKEN_EXPIRATION || "15m",
  REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION || "7d",

  NODE_ENV: process.env.NODE_ENV,
};
