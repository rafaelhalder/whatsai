"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaWhatsappRepository = void 0;
const axios_1 = __importDefault(require("axios"));
// Exemplo de implementação usando uma lib fictícia de WhatsApp
class PrismaWhatsappRepository {
    async createInstanceAndGetQRCode(token, instanceName) {
        const response = await axios_1.default.post("https://hsapi.studio/instance/create", {
            qrcode: true,
            integration: "WHATSAPP-BAILEYS",
            instanceName
        }, {
            headers: {
                apikey: token
            }
        });
        console.log(response);
        if (response.status !== 201) {
            throw new Error("Failed to create instance");
        }
        return 'base64qrcode';
    }
}
exports.PrismaWhatsappRepository = PrismaWhatsappRepository;
