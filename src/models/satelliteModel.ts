import { db } from "../config/db";
import { satellites, SelectSatellites, insertSatellites } from "../schema";
import { eq } from "drizzle-orm";
import { isNull } from "drizzle-orm/sql";

export const findSatellites = () => {
  return db.select().from(satellites);
};

export const findSatelliteById = (id: SelectSatellites["id"]) => {
  return db.select().from(satellites).where(eq(satellites.id, id));
};

export const findSatellitesByPlanetId = (id: SelectSatellites["planetId"]) => {
  //return db.select().from(satellites).where(eq(satellites.planetId, id));

  if (id === null) {
    return db.select().from(satellites).where(isNull(satellites.planetId));
  } else {
    return db.select().from(satellites).where(eq(satellites.planetId, id));
  }
};

export const pushSatellite = (newSatellite: insertSatellites) => {
  return db.insert(satellites).values([newSatellite]).returning();
};

export const destroySatellite = (id: SelectSatellites["id"]) => {
  return db.delete(satellites).where(eq(satellites.id, id)).returning();
};

export const updateSatellite = (id: SelectSatellites["id"], content: insertSatellites) => {
  return db.update(satellites).set(content).where(eq(satellites.id, id)).returning();
};
