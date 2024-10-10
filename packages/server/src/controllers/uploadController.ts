import { Request, Response } from "express";
import { APIResponse } from "../utils/response";
import { logger } from "../utils/logger";

export const uploadFile = async (req: Request, res: Response) => {
  if (!req.file) {
    return APIResponse(res, [], "No file uploaded", 400);
  }
  logger.info("File uploaded successfully", req.file.filename);
  APIResponse(res, req.file, "File uploaded successfully", 201);
};
