// asignarTurno.controller.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SaladeJuego } from '../entity/SaladeJuego.entity';
import { Palabra} from '../entity/Palabra.entity';
import { Jugador } from '../entity/jugador.entity';
import { JuegoAdivinarPalabra } from './adivinarPalabra.controllers';

export const asignarTurno = async (req: Request, res: Response) => {
  try {
    const { salaId } = req.params;

    // Verificar si la sala existe
    const salaRepo = getRepository(SaladeJuego);
    const sala = await salaRepo.findOne(salaId, { relations: ['jugador'] });
    if (!sala) {
      return res.status(404).json({ error: 'La sala no existe' });
    }

    // Verificar si hay jugadores en la sala
    if (sala.jugador.length === 0) {
      return res.status(400).json({ error: 'No hay jugadores en la sala' });
    }

    // Obtener una palabra aleatoria
    const palabraRepository = getRepository(Palabra);
    const palabras = await palabraRepository.find();
    if (palabras.length === 0) {
      return res.status(400).json({ error: 'No hay palabras disponibles en el repositorio' });
    }
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)].texto;

    // Obtener el jugador en turno
    const indiceSiguienteJugador = (sala.turnoJugador + 1) % sala.jugador.length;
    const jugadorEnTurno = sala.jugador[indiceSiguienteJugador];

    // Actualizar la palabra actual en la sala
    sala.palabraActual = palabraAleatoria;
    await salaRepo.save(sala);

    // Notificar al jugador en turno sobre la palabra que debe dibujar
    // Suponiendo que tienes un sistema de notificaciones para los jugadores
    // ...

    // Notificar a los demás jugadores que el jugador en turno está dibujando
    // Suponiendo que tienes un sistema de notificaciones para los jugadores
    // ...

    return res.status(200).json({ jugadorEnTurno, palabraAleatoria });
  } catch (error) {
    console.error('Error al asignar turno:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

