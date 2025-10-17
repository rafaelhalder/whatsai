"use strict";
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    // Stop running tests after `n` failures
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: 'ts-jest',
    setupFiles: ["dotenv/config"], // Carrega o .env antes dos testes
    testEnvironment: 'node',
    testMatch: ["<rootDir>/src/**/*.(spec|test).ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    }
};
exports.default = config;
