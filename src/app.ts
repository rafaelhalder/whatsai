import express from "express";
import { routes } from "./http/routes";
import { errorHandlingMiddleware } from "./http/middlewares/error-handling";
import cookieParser from "cookie-parser";
import cors from "cors"; // Adicione esta linha
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(routes)
app.use(errorHandlingMiddleware as any)
export {app};