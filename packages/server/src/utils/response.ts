import { Response } from "express";

export const APIResponse = (res: Response, data: any, message: string, status = 200) => {
  !data || data.length === 0 ? res.status(status).json({ message: message }) : res.status(status).json({ data: data, message: message });
};
