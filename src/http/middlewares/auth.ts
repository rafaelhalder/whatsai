//// filepath: src/http/middlewares/auth.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "@/env";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    (req as any).user = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}