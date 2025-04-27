import { Router } from "express";
import { registerController } from "@/http/controllers/register";
export const registerRoutes = Router()
const RegisterController = new registerController()
registerRoutes.post("/", RegisterController.register)
