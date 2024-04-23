
import * as express from "express";
import { PalabraController } from "../controllers/palabra.controller";

const Router = express.Router();
const palabraController = new PalabraController();

Router.get(
    "/palabra",
    palabraController.getByTexto
  );

  Router.get(
    "/palabra/:id",
    palabraController.getById
  );

  Router.post(
    "/save",
    palabraController.save
  );

  Router.put(
    "/palabra",
    palabraController.update
  )

  Router.delete(
    "/palabra/:id",
    palabraController.delete
  )
  export { Router as palabraRouter };