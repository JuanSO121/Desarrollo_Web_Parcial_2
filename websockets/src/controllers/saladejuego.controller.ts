import { Request, Response } from "express";
import { SaladeJuegoResponse } from "../dto/saladeJuego.dto";
import { SaladeJuegoRepository } from "../repositories/saladeJuego.repository";
import { SaladeJuego } from "../entity/SaladeJuego.entity";
import { v4 as uuidv4 } from 'uuid';
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
}
