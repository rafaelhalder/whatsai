"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const user_already_exists_error_1 = require("./errors/user-already-exists-error");
class RegisterUseCase {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ name, email, password }) {
        const passwordHash = await (0, bcryptjs_1.hash)(password, 6);
        const userWithSameEmail = await this.usersRepository.findByEmail(email);
        if (userWithSameEmail) {
            throw new user_already_exists_error_1.UserAlreadyExistsError();
        }
        const user = await this.usersRepository.create({
            name,
            email,
            passwordHash,
        });
        const { passwordHash: _, ...userWithoutPassword } = user;
        return { user: userWithoutPassword };
    }
}
exports.RegisterUseCase = RegisterUseCase;
