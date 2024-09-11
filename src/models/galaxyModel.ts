import { db } from "../config/db";
import { galaxies, SelectGalaxies, insertGalaxies } from "../schema";
import { eq } from "drizzle-orm";

export const findGalaxies = () => {
  return db.select().from(galaxies);
};

export const findGalaxyById = (id: SelectGalaxies["id"]) => {
  return db.select().from(galaxies).where(eq(galaxies.id, id));
};

export const pushGalaxy = (newGalaxy: insertGalaxies) => {
  return db.insert(galaxies).values([newGalaxy]).returning();
};

export const destroyGalaxy = (id: SelectGalaxies["id"]) => {
  return db.delete(galaxies).where(eq(galaxies.id, id)).returning();
};

export const updateGalaxy = (id: SelectGalaxies["id"], content: insertGalaxies) => {
  return db.update(galaxies).set(content).where(eq(galaxies.id, id)).returning();
};
