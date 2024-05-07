import * as express from "express";
import { PalabrasPorCategoriaController } from "../controllers/palabrasPorCategoria.controller";

const router = express.Router();
const palabrasPorCategoriaController = new PalabrasPorCategoriaController();



export default router;
