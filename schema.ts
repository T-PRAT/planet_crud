import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const galaxies = pgTable("galaxies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  age: integer("age").notNull(),
  diameter: integer("diameter").notNull(),
});

export const planetarySystems = pgTable("planetary_systems", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  star: text("star").notNull(),
  starType: text("star_type").notNull(),
  age: integer("age").notNull(),
  galaxyId: integer("galaxy_id")
    .notNull()
    .references(() => galaxies.id),
});

export const planets = pgTable("planets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  distanceToSun: integer("distance_to_sun").notNull(),
  radius: integer("radius").notNull(),
  mass: integer("mass").notNull(),
  planetarySystemId: integer("planetary_system_id")
    .notNull()
    .references(() => planetarySystems.id),
});

export const satellites = pgTable("satellites", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  distanceToPlanet: integer("distance_to_planet").notNull(),
  radius: integer("radius").notNull(),
  planetId: integer("planet_id")
    .notNull()
    .references(() => planets.id),
});
