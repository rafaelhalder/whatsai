"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const prisma_1 = require("@/lib/database/prisma");
const app_1 = require("@/app");
describe("RegisterUseCase", () => {
    let user_id;
    afterAll(async () => {
        await prisma_1.prisma.user.delete({
            where: {
                id: user_id
            }
        });
    });
    it("should create a new user", async () => {
        const response = await (0, supertest_1.default)(app_1.app).post("/register").send({
            name: "John Doe",
            email: "ra@exec.com",
            password: "1234561"
        });
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty("user");
        expect(response.body.user).toHaveProperty("name", "John Doe");
        user_id = response.body.user.id;
    });
    it("should ot create same email", async () => {
        const response = await (0, supertest_1.default)(app_1.app).post("/register").send({
            name: "Jodasdadshn Doe",
            email: "ra@exec.com",
            password: "1234561"
        });
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("message", "E-mail already exists");
    });
    it("should throw a validation error if email is invalid", async () => {
        const response = await (0, supertest_1.default)(app_1.app).post("/register").send({
            name: "John Doe",
            email: "invalid",
            password: "1234578"
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Validation error");
    });
});
