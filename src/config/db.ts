import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "./env";

const { DATABASE_URL } = env;

const sql = neon(DATABASE_URL!);
export const db = drizzle(sql);
