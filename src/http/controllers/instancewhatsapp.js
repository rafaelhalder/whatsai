"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhatsappInstanceController = void 0;
const createWhatsappInstance_1 = require("@/use-cases/createWhatsappInstance");
const WhatsappRepository_1 = require("@/repositories/WhatsappRepository");
class CreateWhatsappInstanceController {
    async createWhatsappInstanceController(req, res, next) {
        const { token } = req.body;
        const whatsappRepository = new WhatsappRepository_1.PrismaWhatsappRepository();
        const useCase = new createWhatsappInstance_1.CreateWhatsappInstanceUseCase(whatsappRepository);
        const result = await useCase.execute({ token });
        res.status(201).json(result);
        next();
    }
}
exports.CreateWhatsappInstanceController = CreateWhatsappInstanceController;
