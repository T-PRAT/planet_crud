import { db } from "../config/db";
import { users, SelectUsers, insertUsers } from "../schema";
import { eq } from "drizzle-orm";

export const findUsers = () => {
  return db.select().from(users);
};

export const findUserById = (id: SelectUsers["id"]) => {
  return db.select().from(users).where(eq(users.id, id));
};
export const pushUser = (newUser: insertUsers) => {
  return db.insert(users).values([newUser]).returning();
};

export const destroyUser = (id: SelectUsers["id"]) => {
  return db.delete(users).where(eq(users.id, id)).returning();
};

export const findUserByEmail = (email: SelectUsers["email"]) => {
  return db.select().from(users).where(eq(users.email, email));
};
