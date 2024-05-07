import { SaladeJuegoRepository } from "../repositories/saladeJuego.repository";

const express = require('express');
const router = express.Router();
module.exports = (expressWs) => {
    
    const saladeJuegoRepository = new SaladeJuegoRepository();
    expressWs.applyTo(router);

    const rooms = {};

    router.ws('/room/:roomName', async (ws, req) => {
        const roomName = req.params.roomName;
        const userName = req.headers.username;
    
        // Verificar si la sala existe en la base de datos
        try {
            const sala = await saladeJuegoRepository.findByNombre(roomName);
            if (!sala) {
                // Si la sala no existe, devolver un mensaje de error al cliente
                ws.send('La sala especificada no existe');
                ws.close();
                return;
            }
        } catch (error) {
            // Manejar errores de base de datos
            console.error('Error al buscar la sala en la base de datos:', error);
            ws.send('Error al buscar la sala en la base de datos');
            ws.close();
            return;
        }
        ws.on('message', async function(msg) {
            const jsonMessage: {type: string, data: any} = JSON.parse(msg);
            if(jsonMessage.type === 'SEND_MESSAGE'){
                if (rooms[roomName]) {
                    rooms[roomName].forEach(client => {
                        if (client.ws !== ws && client.ws.readyState === ws.OPEN) {
                          console.log(ws.OPEN);
                            client.ws.send(`${userName} Says: ${jsonMessage.data}`);
                        }
                    });
                }
            }if(jsonMessage.type === 'FINISH_TURN'){
                const salas = await saladeJuegoRepository.getAll();
                if (rooms[roomName]) {
                    rooms[roomName].forEach(client => {
                        if (client.ws !== ws && client.ws.readyState === ws.OPEN) {
                          console.log(ws.OPEN);
                            client.ws.send(JSON.stringify(salas));
                        }
                    });
                }
            }
            
        });
        ws.on('close', function() {
            rooms[roomName].delete(ws);
            if (rooms[roomName].size === 0) {
                delete rooms[roomName];
            }
        });
    });

    return router;
};