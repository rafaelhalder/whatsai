"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUsersRepository = void 0;
const prisma_1 = require("@/lib/database/prisma");
class PrismaUsersRepository {
    async create(data) {
        const user = await prisma_1.prisma.user.create({
            data,
        });
        return user;
    }
    async findByEmail(email) {
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    }
}
exports.PrismaUsersRepository = PrismaUsersRepository;
