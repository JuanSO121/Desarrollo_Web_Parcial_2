// server.js

const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});


import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import { SalaDeJuego } from './SalaDeJuego';


const io = new Server(server);

// Inicializar la sala de juego
const sala = new SalaDeJuego();

io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('iniciarJuego', async () => {
        await sala.iniciarJuego();
        io.emit('juegoIniciado');
    });

    socket.on('asignarTurno', async () => {
        await sala.asignarTurnoJugador();
        io.emit('turnoAsignado', sala.obtenerTurnoActual());
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});


io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('disconnect', () => {
      console.log('Usuario desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor de sockets iniciado en el puerto 3000');
});

export { app, server, io };

server.listen(3000, () => {
    console.log('Servidor de sockets iniciado en el puerto 3000');
});


import express from 'express';
import asignarTurnoRoutes from './routes/asignarTurnoRoutes';

//ASIGNAR TURNO 

app.use(express.json());

app.use('/asignar-turno', asignarTurnoRoutes);

app.listen(4000, () => {
    console.log('Servidor Express iniciado en el puerto 4000');
});

/*
import { Server } from 'socket.io';
import http from 'http';
import express from 'express';


io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor de sockets iniciado en el puerto 3000');
});

export { app, io, server }; // Exportar el objeto io y server */
