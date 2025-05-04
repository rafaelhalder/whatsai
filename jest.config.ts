/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
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
  moduleNameMapper:{
    "^@/(.*)$": "<rootDir>/src/$1",
  }
};

export default config;
