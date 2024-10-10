import { db } from "../config/db";
import { planetarySystems, SelectPlanetarySystems, insertPlanetarySystems } from "../schema/index";
import { eq } from "drizzle-orm";
import { isNull } from "drizzle-orm/sql";

export const findPlanetarySystems = () => {
  return db.select().from(planetarySystems);
};

export const findPlanetarySystemById = (id: SelectPlanetarySystems["id"]) => {
  return db.select().from(planetarySystems).where(eq(planetarySystems.id, id));
};

export const findPlanetarySystemsByGalaxyId = (id: SelectPlanetarySystems["galaxyId"]) => {
  if (id === null) {
    return db.select().from(planetarySystems).where(isNull(planetarySystems.galaxyId));
  } else {
    return db.select().from(planetarySystems).where(eq(planetarySystems.galaxyId, id));
  }
};

export const pushPlanetarySystem = (newPlanetarySystem: insertPlanetarySystems) => {
  return db.insert(planetarySystems).values([newPlanetarySystem]).returning();
};

export const destroyPlanetarySystem = (id: SelectPlanetarySystems["id"]) => {
  return db.delete(planetarySystems).where(eq(planetarySystems.id, id)).returning();
};

export const updatePlanetarySystem = (id: SelectPlanetarySystems["id"], content: insertPlanetarySystems) => {
  return db.update(planetarySystems).set(content).where(eq(planetarySystems.id, id)).returning();
};
