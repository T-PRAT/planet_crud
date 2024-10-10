import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { planets } from "./planets";

export const satellites = pgTable("satellites", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  distanceToPlanet: integer("distance_to_planet").notNull(),
  radius: integer("radius").notNull(),
  planetId: uuid("planet_id").references(() => planets.id),
});
