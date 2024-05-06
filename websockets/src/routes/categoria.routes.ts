
import * as express from "express";
import { CategoriaController } from "../controllers/categoria.controller";
//ND
const Router = express.Router();
const categoriaController = new CategoriaController();

Router.get(
    "/categoria",
    categoriaController.getByNombre
  );

  Router.get(
    "/categoria/:id",
    categoriaController.getById
  );

  Router.post(
    "/categoria",
    categoriaController.save
  );

  Router.put(
    "/categoria",
    categoriaController.update
  )

  Router.delete(
    "/categoria/:id",
    categoriaController.delete
  )
  export { Router as categoriaRouter };