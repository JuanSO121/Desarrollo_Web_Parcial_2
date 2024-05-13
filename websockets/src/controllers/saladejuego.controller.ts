import { Request, Response } from "express";
import { SaladeJuegoResponse } from "../dto/saladeJuego.dto";
import { SaladeJuegoRepository } from "../repositories/saladeJuego.repository";
import { SaladeJuego } from "../entity/SaladeJuego.entity";
import { Categoria } from "../entity/Categoria.entity";

import { v4 as uuidv4 } from 'uuid';

export class SaladeJuegoController{
    
    private saladeJuegoRepository: SaladeJuegoRepository = new SaladeJuegoRepository();
    


    // public getAll = async (req: Request, res: Response) => {
    //     const nombre = <string> req.query.nombre;
    //     try {
    //         const salas: SaladeJuego[] = await this.saladeJuegoRepository.getAll(nombre);
    //         return res.status(200).json(salas);
    //     } catch (error) {
    //          res.status(400).json({ error: error.message });
    //    }
    // }

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
            let salaToUpdate: SaladeJuego | undefined = await this.saladeJuegoRepository.findById(Number(id));
            
            if (!salaToUpdate) {
                return res.status(404).json({ error: 'Sala no encontrada' });
            }
            
            salaToUpdate.nombre = body.nombre;
            salaToUpdate.estado = body.estado;
            salaToUpdate.cate_id = body.cate_id; 

            const result: SaladeJuego = await this.saladeJuegoRepository.save(salaToUpdate);
            
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    

    public delete = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            await this.saladeJuegoRepository.delete(Number(id));
            res.status(200).json({message: 'Deleted'});
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public getByCategory = async (req: Request, res: Response) => {
        const cate_id = Number(req.query.cate_id);
        if (isNaN(cate_id)) {
            return res.status(400).json({ error: 'cate_id debe ser un número' });
        }
        try {
            const salasDeJuego: SaladeJuego[] = await this.saladeJuegoRepository.findByCategory(cate_id);
            return res.status(200).json(salasDeJuego);
        } catch (error) {
             res.status(400).json({ error: error.message });
        }
    };
    
    public getByState = async (req: Request, res: Response) => {
        const estado = <string>req.query.estado;
        try {
            const salasDeJuego: SaladeJuego[] = await this.saladeJuegoRepository.findByState(estado);
            return res.status(200).json(salasDeJuego);
        } catch (error) {
             res.status(400).json({ error: error.message });
        }
    };

}