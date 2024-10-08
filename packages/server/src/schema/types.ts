import { galaxies } from "./galaxies";
import { planets } from "./planets";
import { planetarySystems } from "./planetarySystems";
import { satellites } from "./satellites";
import { users } from "./users";
import { rooms } from "./rooms";
import { messages } from "./messages";

export type insertRooms = typeof rooms.$inferInsert;
export type SelectRooms = typeof rooms.$inferSelect;

export type insertMessages = typeof messages.$inferInsert;
export type SelectMessages = typeof messages.$inferSelect;

export type insertUsers = typeof users.$inferInsert;
export type SelectUsers = typeof users.$inferSelect;

export type insertGalaxies = typeof galaxies.$inferInsert;
export type SelectGalaxies = typeof galaxies.$inferSelect;

export type insertPlanetarySystems = typeof planetarySystems.$inferInsert;
export type SelectPlanetarySystems = typeof planetarySystems.$inferSelect;

export type insertPlanets = typeof planets.$inferInsert;
export type SelectPlanets = typeof planets.$inferSelect;

export type insertSatellites = typeof satellites.$inferInsert;
export type SelectSatellites = typeof satellites.$inferSelect;
