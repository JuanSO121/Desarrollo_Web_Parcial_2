import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Jugador } from '../entity/jugador.entity';
import { JugadorDTO } from '../dto/jugador.dto';

export class SalaDeJuegoController {
private jugadorRepository = getRepository(Jugador);

public async agregarJugador(req: Request, res: Response): Promise<void> {
    const jugadorDTO: JugadorDTO = req.body;
    const nuevoJugador = this.jugadorRepository.create(jugadorDTO);
    await this.jugadorRepository.save(nuevoJugador);
    res.status(201).json(nuevoJugador);
}

public async obtenerJugadores(req: Request, res: Response): Promise<void> {
    const jugadores = await this.jugadorRepository.find();
    res.status(200).json(jugadores);
}

public delete = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        await this.jugadorRepository.delete(Number(id));
        res.status(200).json({message: 'Deleted'});
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
}
