import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { planetarySystems } from "./planetarySystems";

export const planets = pgTable("planets", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  distanceToSun: integer("distance_to_sun").notNull(),
  radius: integer("radius").notNull(),
  mass: integer("mass").notNull(),
  planetarySystemId: uuid("planetary_system_id").references(() => planetarySystems.id),
});
