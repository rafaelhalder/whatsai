import express from "express";
import { routes } from "./http/routes";
import { errorHandlingMiddleware } from "./http/middlewares/error-handling";

const app = express();
app.use(express.json());
app.use(routes)
app.use(errorHandlingMiddleware as any)
export {app};