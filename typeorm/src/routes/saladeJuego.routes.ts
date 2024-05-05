
import * as express from "express";
import { SaladeJuegoController } from "../controllers/saladejuego.controller";

const Router = express.Router();
const saladejuegoController = new SaladeJuegoController();

Router.get(
    "/saladejuego",
    saladejuegoController.getByNombre
  );

  Router.get(
    "/saladejuego",
    saladejuegoController.getByEstado
  );

  Router.get(
    "/saladejuego/:id",
    saladejuegoController.getById
  );

  Router.post(
    "/save",
    saladejuegoController.save
  );

  Router.put(
    "/saladejuego",
    saladejuegoController.update
  )

  Router.delete(
    "/saladejuego/:id",
    saladejuegoController.delete
  )
  export { Router as saladeJuegoControllerRouter };