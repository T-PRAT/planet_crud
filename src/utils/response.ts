import { Response } from "express";

export const APIResponse = (res: Response, data: any, message: string, status = 200) => {
  if (!data) {
    throw new Error("Data cannot be null or undefined");
  }
  res.status(status).json({ data: data, message: message });
};
