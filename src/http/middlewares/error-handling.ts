import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandlingMiddleware(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return response.status(400).json({
      message: "Validation error",
      issues: error.issues,
    });
  }

  if (error instanceof Error) {
    return response.status(400).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    message: "Internal server error",
  });
}