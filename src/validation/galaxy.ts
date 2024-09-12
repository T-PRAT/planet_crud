import { z } from "zod";

export const galaxySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  age: z.number().min(1, { message: "Age is required" }),
  diameter: z.number().min(1, { message: "Diameter is required" }),
});
