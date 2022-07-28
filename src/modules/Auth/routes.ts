import { Router } from "express";
import controller from "./controller";
import cors from "cors";

const routes = Router();

routes.post("/login", cors(), controller.login);
routes.post("/reset-senha", cors(), controller.gerarNovoHash);
routes.post("/recuperar-senha", cors(), controller.recuperarSenha);

export default routes;
