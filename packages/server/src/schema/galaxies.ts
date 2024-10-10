import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const galaxies = pgTable("galaxies", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  age: integer("age").notNull(),
  diameter: integer("diameter").notNull(),
});
