"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const register_1 = require("@/http/controllers/register");
exports.registerRoutes = (0, express_1.Router)();
const RegisterController = new register_1.registerController();
exports.registerRoutes.post("/", RegisterController.register);
