import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";
import { Request, Response } from "express";

import "reflect-metadata";
import { errorHandler } from "./middleware/errorHandler";
import { palabraRouter } from "./routes/palabra.routes";
import { categoriaRouter } from "./routes/categoria.routes";
import { saladeJuegoControllerRouter } from "./routes/saladeJuego.routes";
import { palabraPorCategoriaRouter } from "./routes/palabrasPorCategoria.routes";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerSpec from './swagger'
const cors = require('cors');
dotenv.config();

const { PORT = 3000 } = process.env;
var express = require('express');
var app = express();
const wsInstance = require('express-ws')(app);
const websocketRouter = require('../src/routes/socket.routes')(wsInstance);
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api", palabraRouter);
app.use("/categoria", categoriaRouter);
app.use("/por", palabraPorCategoriaRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/ws', websocketRouter);




AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));


  //VS

  //import * as express from "express";
//import salaDeJuegoRoutes from './routes/SalaDeJuegoRoutes';

//const app = express();
//const PORT = 3000;

app.use(express.json());
app.use('/sala-de-juego', saladeJuegoControllerRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});