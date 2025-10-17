"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const env_1 = require("@/env");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthenticateUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ email, password }) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const doesPasswordMatch = await (0, bcryptjs_1.compare)(password, user.passwordHash);
        if (!doesPasswordMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jsonwebtoken_1.default.sign({
            sub: user.id
        }, env_1.env.JWT_SECRET, { expiresIn: '7d' });
        return {
            user,
            token
        };
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
