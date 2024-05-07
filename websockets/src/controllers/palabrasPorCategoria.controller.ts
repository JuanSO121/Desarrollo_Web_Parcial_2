import { Request, Response } from "express";
import { PalabrasPorCategoriaResponse } from "../dto/palabrasPorCategoria.dto";
import { PalabrasPorCategoriaRepository } from "../repositories/palabrasPorCategoria.repository";
import { PalabrasPorCategoria } from "../entity/PalabrasPorCategoria.entity";
import { v4 as uuidv4 } from 'uuid';
//ND
export class PalabrasPorCategoriaController {
    private palabrasPorCategoriaRepository: PalabrasPorCategoriaRepository = new PalabrasPorCategoriaRepository();

    public getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const palabrasPorCategoria: PalabrasPorCategoria = await this.palabrasPorCategoriaRepository.findById(Number(id));
            if (palabrasPorCategoria === null) {
                res.status(404).json({ error: 'This word doesn\'t exist' });
            }
            res.status(200).json({ palabrasPorCategoria });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }


    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await this.palabrasPorCategoriaRepository.delete(Number(id));
            res.status(200).json({ message: 'Deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public create = async (req: Request, res: Response) => {
        const { cate_id, pala_id } = req.body;

        try {
            // Verificar si la categoría y la palabra existen
            const categoria = await Categoria.findOne(cate_id);
            const palabra = await Palabra.findOne(pala_id);

            if (!categoria || !palabra) {
                return res.status(404).json({ error: 'La categoría o la palabra no existen' });
            }

            // Crear la asociación
            const nuevaAsociacion = new PalabrasPorCategoria();
            nuevaAsociacion.categoria = categoria;
            nuevaAsociacion.palabra = palabra;

            await nuevaAsociacion.save();

            res.status(201).json({ message: 'Asociación creada correctamente' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


    //Ver lista de todas
}
