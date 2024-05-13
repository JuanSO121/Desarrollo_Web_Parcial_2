import * as express from "express";
import { SaladeJuegoController } from "../controllers/saladejuego.controller";

const Router = express.Router();
const saladejuegoController = new SaladeJuegoController();

// Router.get(
//     "/saladejuego/nombre",
//     saladejuegoController.getAllByNombre
// );

// Router.get(
//     "/saladejuego/:id",
//     saladejuegoController.getById
// );

// Router.get(
//     "/saladejuego/getAll/",
//     saladejuegoController.getAll
// );
  
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

export { Router as saladeJuegoRouter };
