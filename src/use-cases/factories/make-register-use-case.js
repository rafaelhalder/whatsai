"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterUseCase = makeRegisterUseCase;
const prisma_users_repository_1 = require("@/repositories/prisma/prisma-users-repository");
const register_1 = require("../register");
function makeRegisterUseCase() {
    const usersRepository = new prisma_users_repository_1.PrismaUsersRepository();
    const registerUseCase = new register_1.RegisterUseCase(usersRepository);
    return registerUseCase;
}
