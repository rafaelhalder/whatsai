"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhatsappInstanceUseCase = void 0;
class CreateWhatsappInstanceUseCase {
    whatsappInstanceRepository;
    constructor(whatsappInstanceRepository) {
        this.whatsappInstanceRepository = whatsappInstanceRepository;
    }
    async execute({ token }) {
        const instanceName = 'user-' + Math.random().toString(36).substring(2, 10);
        const qrCodeBase64 = await this.whatsappInstanceRepository.createInstanceAndGetQRCode(token, instanceName);
        return { instanceName, qrCodeBase64 };
    }
}
exports.CreateWhatsappInstanceUseCase = CreateWhatsappInstanceUseCase;
