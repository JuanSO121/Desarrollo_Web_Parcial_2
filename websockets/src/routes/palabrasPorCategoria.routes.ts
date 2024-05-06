
import * as express from "express";
import { PalabrasPorCategoriaController } from "../controllers/palabrasPorCategoria.controller";
//ND
const Router = express.Router();
const palabrasPorCategoriaController = new PalabrasPorCategoriaController();


  export { Router as palabrasPorCategoriaRouter };