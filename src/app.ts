import express from "express";
import { routes } from "./http/routes";
import { errorHandlingMiddleware } from "./http/middlewares/error-handling";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(routes)
app.use(errorHandlingMiddleware as any)
export {app};