"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "production", "test"]).default("development"),
    PORT: zod_1.z.coerce.number().default(3000),
    JWT_SECRET: zod_1.z.string(),
    DATABASE_URL: zod_1.z.string(),
    EVOLUTION_BASE_URL: zod_1.z.string(),
});
const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
    console.error("Invalid environment variables", _env.error.format());
    throw new Error("Invalid environment variables");
}
exports.env = _env.data;
