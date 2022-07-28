import { Router } from "express";
import controller from "./controller";
import imgUpload from "../../infra/middlewares/imgUpload";
import cors from "cors"

const routes = Router();

routes.get("/", controller.start);
routes.post("/cadastro", cors(), imgUpload.single("avatar"), controller.createClient);

export default routes;