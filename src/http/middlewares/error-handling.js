"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = errorHandlingMiddleware;
const zod_1 = require("zod");
function errorHandlingMiddleware(error, request, response, next) {
    if (error instanceof zod_1.ZodError) {
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
