import { env } from "@/env";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "info", "warn"] : ["error"],
  errorFormat: env.NODE_ENV === "development" ? "pretty" : "minimal",
})