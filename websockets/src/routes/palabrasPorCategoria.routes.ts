
import * as express from "express";
import { PalabrasPorCategoriaController } from "../controllers/palabrasPorCategoria.controller";
//ND
const Router = express.Router();
const palabrasPorCategoriaController = new PalabrasPorCategoriaController();

  Router.get(
    "/palabraPorCategoria/:id",
    palabrasPorCategoriaController.getById
  );


  Router.delete(
    "/palabraPorCategoria/:id",
    palabrasPorCategoriaController.delete
  )

  Router.post("/palabrasPorCategoria", palabrasPorCategoriaController.create);


  export { Router as palabraPorCategoriaRouter };