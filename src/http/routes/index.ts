import { Router } from "express"
import { registerRoutes } from "./register"
import { authenticateRoutes } from "./authenticate"
const routes = Router()
routes.use("/register", registerRoutes)
routes.use("/authenticate", authenticateRoutes)
export{routes}