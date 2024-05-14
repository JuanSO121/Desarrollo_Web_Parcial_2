import * as express from "express";
import { SaladeJuegoController } from "../controllers/saladejuego.controller";

const Router = express.Router();
const saladejuegoController = new SaladeJuegoController();
  
Router.post(
    "/saladejuego",
    saladejuegoController.save
);

Router.put(
    "/saladejuego",
    saladejuegoController.update
);

Router.delete(
    "/saladejuego/:id",
    saladejuegoController.delete
);

Router.get(
    "/saladejuego/categoria",
    saladejuegoController.getByCategory
);

Router.get(
    "/saladejuego/estado",
    saladejuegoController.getByState
);

Router.get(
    "/saladejuego/:salaId/palabras",
    saladejuegoController.getPalabrasBySalaId
);


export { Router as saladeJuegoRouter };
