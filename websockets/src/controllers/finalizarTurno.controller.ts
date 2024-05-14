/ finalizarTurno.controller.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SaladeJuego } from '../entity/SaladeJuego.entity';
import { Jugador } from '../entity/jugador.entity';
import { JuegoAdivinarPalabra } from './adivinarPalabra.controllers';
import { TurnoDeJuego } from '../dto/TurnoDeJuego.dto';

export const finalizarTurno = async (req: Request, res: Response) => {
  try {
    const { salaId } = req.params;

    // Verificar si la sala existe
    const salaRepo = getRepository(SaladeJuego);
    const jugador = await salaRepo.findOne(salaId, { relations: ['jugador'] });
    if (!jugador) {
      return res.status(404).json({ error: 'La sala no existe' });
    }

    // Verificar si hay jugadores en la sala
    if (jugador.jugador.length === 0) {
      return res.status(400).json({ error: 'No hay jugadores en la sala' });
    }

    // Incrementar el turno del jugador
    sala.turnoJugador = (sala.turnoJugador + 1) % sala.jugador.length;

    // Actualizar el puntaje del jugador en turno (opcional)
    const jugadorEnTurno = sala.jugador[sala.turnoJugador];
    jugadorEnTurno.puntaje += 1;
    const jugadorRepo = getRepository(Jugador);
    await jugadorRepo.save(jugadorEnTurno);

    // Guardar los cambios en la base de datos
    await salaRepo.save(sala);

    // Notificar a los jugadores que el turno ha finalizado
    // Suponiendo que tienes un sistema de notificaciones para los jugadores
    // ...

    return res.status(200).json({ message: 'El turno ha finalizado' });
  } catch (error) {
    console.error('Error al finalizar turno:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};
