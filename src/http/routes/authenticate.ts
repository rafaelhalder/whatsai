import { Router } from "express";
import { authenticateController } from "../controllers/authenticate";
export const authenticateRoutes = Router()
const AuthenticateController = new authenticateController()
authenticateRoutes.post("/", AuthenticateController.authenticate)
