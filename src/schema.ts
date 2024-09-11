import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const galaxies = pgTable("galaxies", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  age: integer("age").notNull(),
  diameter: integer("diameter").notNull(),
});

export const planetarySystems = pgTable("planetary_systems", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  star: text("star").notNull(),
  starType: text("star_type").notNull(),
  age: integer("age").notNull(),
  galaxyId: uuid("galaxy_id").references(() => galaxies.id),
});

export const planets = pgTable("planets", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  distanceToSun: integer("distance_to_sun").notNull(),
  radius: integer("radius").notNull(),
  mass: integer("mass").notNull(),
  planetarySystemId: uuid("planetary_system_id").references(() => planetarySystems.id),
});

export const satellites = pgTable("satellites", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  distanceToPlanet: integer("distance_to_planet").notNull(),
  radius: integer("radius").notNull(),
  planetId: uuid("planet_id").references(() => planets.id),
});

export type insertGalaxies = typeof galaxies.$inferInsert;
export type SelectGalaxies = typeof galaxies.$inferSelect;

export type insertPlanetarySystems = typeof planetarySystems.$inferInsert;
export type SelectPlanetarySystems = typeof planetarySystems.$inferSelect;

export type insertPlanets = typeof planets.$inferInsert;
export type SelectPlanets = typeof planets.$inferSelect;

export type insertSatellites = typeof satellites.$inferInsert;
export type SelectSatellites = typeof satellites.$inferSelect;
