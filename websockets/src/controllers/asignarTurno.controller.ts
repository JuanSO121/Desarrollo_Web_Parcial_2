// import { Request, Response } from 'express';
// import { io } from './server';

// export const asignarTurnoController = (req: Request, res: Response) => {
//     const { jugadores } = req.body;
//     if (!jugadores || !Array.isArray(jugadores)) {
//         return res.status(400).json({ error: 'La solicitud debe incluir una lista de jugadores' });
//     }

//     io.emit('iniciarJuego', jugadores); // Usar io.emit en lugar de socket.emit
//     return res.status(200).json({ message: 'Juego iniciado, turnos asignados' });
// };

