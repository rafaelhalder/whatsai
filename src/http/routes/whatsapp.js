"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsRoutes = void 0;
const express_1 = require("express");
const instancewhatsapp_1 = require("@/http/controllers/instancewhatsapp");
exports.whatsRoutes = (0, express_1.Router)();
const WhatsController = new instancewhatsapp_1.CreateWhatsappInstanceController();
exports.whatsRoutes.post('/', WhatsController.createWhatsappInstanceController);
