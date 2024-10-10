import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { galaxies } from "./galaxies";

export const planetarySystems = pgTable("planetary_systems", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  star: text("star").notNull(),
  starType: text("star_type").notNull(),
  age: integer("age").notNull(),
  galaxyId: uuid("galaxy_id").references(() => galaxies.id),
});
