import { Router } from "express";
import UseController from "./controllers/UseController";
const routes = Router();

routes.get('/users', UseController.index);
routes.post('/users', UseController.create);

export default routes;