import { z } from "zod";

export const planetSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["Terrestrial", "GasGiant", "IceGiant", "DwarfPlanet"]),
  distanceToSun: z.number().min(1),
  radius: z.number().min(1),
  mass: z.number().min(1),
  planetarySystemId: z.string(),
});
