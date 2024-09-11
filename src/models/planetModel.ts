import { db } from "../config/db";
import { planets, SelectPlanets, insertPlanets } from "../schema";
import { eq } from "drizzle-orm";
import { isNull } from "drizzle-orm/sql";

export const findPlanets = () => {
  return db.select().from(planets);
};

export const findPlanetById = (id: SelectPlanets["id"]) => {
  return db.select().from(planets).where(eq(planets.id, id));
};

export const findPlanetsBySolarSystemId = (id: SelectPlanets["planetarySystemId"]) => {
  // return db.select().from(planets).where(eq(planets.planetarySystemId, name));

  if (id === null) {
    return db.select().from(planets).where(isNull(planets.planetarySystemId));
  } else {
    return db.select().from(planets).where(eq(planets.planetarySystemId, id));
  }
};

export const pushPlanet = (newPlanet: insertPlanets) => {
  return db.insert(planets).values([newPlanet]).returning();
};

export const destroyPlanet = (id: SelectPlanets["id"]) => {
  return db.delete(planets).where(eq(planets.id, id)).returning();
};

export const updatePlanet = (id: SelectPlanets["id"], content: insertPlanets) => {
  return db.update(planets).set(content).where(eq(planets.id, id)).returning();
};
