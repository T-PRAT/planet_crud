import { db } from "../config/db";
import { insertRooms, rooms } from "../schema/index";
import { eq } from "drizzle-orm";
import { isNull } from "drizzle-orm/sql";

export const pushRoom = async (newRoom: insertRooms) => {
  return db.insert(rooms).values([newRoom]).returning();
};
