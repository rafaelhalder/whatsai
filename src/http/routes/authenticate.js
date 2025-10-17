"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const authenticate_1 = require("../controllers/authenticate");
exports.authenticateRoutes = (0, express_1.Router)();
const AuthenticateController = new authenticate_1.authenticateController();
exports.authenticateRoutes.post("/", AuthenticateController.authenticate);
