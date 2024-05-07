import { Request, Response } from "express";
import { SaladeJuegoResponse } from "../dto/saladeJuego.dto";
import { SaladeJuegoRepository } from "../repositories/saladeJuego.repository";
import { SaladeJuego } from "../entity/SaladeJuego.entity";
import { v4 as uuidv4 } from 'uuid';

import { Palabra } from "../entity/Palabra.entity";
import { PalabrasPorCategoria } from "../entity/PalabrasPorCategoria.entity";
import { getRepository } from "typeorm";
//ND
export class SaladeJuegoController {
    private saladeJuegoRepository: SaladeJuegoRepository = new SaladeJuegoRepository();

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const saladeJuego: SaladeJuego = await this.saladeJuegoRepository.findById(Number(id));
            if (saladeJuego === null) {
                res.status(404).json({ error: 'This word doesn\'t exist' });
            }
            res.status(200).json({ saladeJuego });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    public getByNombre = async (req: Request, res: Response) => {
        try {
            const nombre = <string>req.query.texto;
            console.log(nombre);
            const saladeJuego: SaladeJuegoResponse = await this.saladeJuegoRepository.findByNombre(nombre);
            return res.status(200).json({ SaladeJuego });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public getByEstado = async (req: Request, res: Response) => {
        try {
            const estado = <string>req.query.texto;
            console.log(estado);
            const saladeJuego: SaladeJuegoResponse = await this.saladeJuegoRepository.findByNombre(estado);
            return res.status(200).json({ SaladeJuego });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public save = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const result: SaladeJuego = await this.saladeJuegoRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let saladeJuegoToUpdate: SaladeJuego = await this.saladeJuegoRepository.findById(id);
            saladeJuegoToUpdate = { ...body };
            const result: SaladeJuego = await this.saladeJuegoRepository.save(saladeJuegoToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await this.saladeJuegoRepository.delete(Number(id));
            res.status(200).json({ message: 'Deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


    //Ver lista de todas
}

//VS

// export async function generarTurnoDeJuego(req: Request, res: Response) {
//     try {
//       const salaRepository = getRepository(SaladeJuego);
//       const salas = await salaRepository.find();
  
//       const turnos = [];
  
//       for (const sala of salas) {
//         const turnoSala = {
//           nombreSala: sala.nombre,
//           estadoSala: sala.estado,
//           palabras: []
//         };
  
//         if (SaladeJuego.cate_id) {
//           const palabrasPorCategoriaRepository = getRepository(PalabrasPorCategoria);
//           const palabrasPorCategoria = await palabrasPorCategoriaRepository.find({ where: { cate_id: sala.cate_id } });
  
//           for (const palabraPorCategoria of palabrasPorCategoria) {
//             const palabraRepository = getRepository(Palabra);
//             const palabra = await palabraRepository.findOne({ where: { id: palabraPorCategoria.pala_id } });
  
//             turnoSala.palabras.push(palabra.texto);
//           }
//         }
  
//         turnos.push(turnoSala);
//       }
  
//       res.status(200).json({ turnos });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error al generar turno de juego' });
//     }
//   }


//   export async function finalizarTurnoDeJuego(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
  
//       const salaRepository = getRepository(SaladeJuego);
//       const sala = await salaRepository.findOne({ where: { id } });
  
//       if (!sala) {
//         return res.status(404).json({ message: 'Sala de juego no encontrada' });
//       }
  
//       sala.estado = 'finalizado';
//       await salaRepository.save(sala);
  
//       res.status(200).json({ message: 'Turno de juego finalizado correctamente' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error al finalizar turno de juego' });
//     }
  // }