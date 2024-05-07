
import * as express from "express";
import { SaladeJuegoController } from "../controllers/saladejuego.controller";
//ND
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

  Router.get(
    '/turno',
     generarTurnoDeJuego
    )
    
    export { Router as saladeJuegoRouter };


  //VS

//  import express from 'express';
//import { generarTurnoDeJuego } from '../controllers/SalaDeJuegoController';

const router = express.Router();



export default router;



//import { generarTurnoDeJuego, finalizarTurnoDeJuego }  from "../controllers/saladejuego.controller";



router.get('/turno', generarTurnoDeJuego);
router.put('/turno/:id/finalizar', finalizarTurnoDeJuego);



//import { generarTurnoDeJuego, finalizarTurnoDeJuego } from '../controllers/SalaDeJuegoController';
//import { adivinarPalabra } from '../controllers/adivinarPalabra.controller';

//const router = express.Router();

router.get('/turno', generarTurnoDeJuego);
router.put('/turno/:id/finalizar', finalizarTurnoDeJuego);
router.post('/adivinar/:id', adivinarPalabra);

export default router;

