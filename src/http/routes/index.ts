import { Router } from "express"
import { registerRoutes } from "./register"
import { authenticateRoutes } from "./authenticate"
import { whatsRoutes } from "./whatsapp"
const routes = Router()
routes.use("/register", registerRoutes)
routes.use("/authenticate", authenticateRoutes)
routes.use("/instance", whatsRoutes)
export{routes}