"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticateUseCase = makeAuthenticateUseCase;
const prisma_users_repository_1 = require("@/repositories/prisma/prisma-users-repository");
const authenticate_1 = require("../authenticate");
function makeAuthenticateUseCase() {
    const usersRepository = new prisma_users_repository_1.PrismaUsersRepository();
    const authenticateUseCase = new authenticate_1.AuthenticateUseCase(usersRepository);
    return authenticateUseCase;
}
