import { Request, Response } from "express";
import { CategoriaResponse } from "../dto/categoria.dto";
import { CategoriaRepository } from "../repositories/categoria.repository";
import { Categoria } from "../entity/Categoria.entity";
import { v4 as uuidv4 } from 'uuid';
//ND
export class CategoriaController{
    private categoriaRepository: CategoriaRepository = new CategoriaRepository();

        public getById = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            console.log('Promise unresolved');
            const categoria: Categoria = await this.categoriaRepository.findById(Number(id));
            ;
            if(categoria === null){
                res.status(404).json({ error: 'Categoria doesnt exists'});
            }
            res.status(200).json({categoria});
            
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public getByNombre = async (req: Request, res: Response) => {
        try {
            const nombre = <string>req.query.nombre;
            console.log(nombre);
            const categoria: CategoriaResponse = await this.categoriaRepository.findByNombre(nombre);
            return res.status(200).json({ categoria });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    public save = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const result: Categoria = await this.categoriaRepository.save(body);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public update = async (req: Request, res: Response) => {
        const body = req.body;
        try {
            const id = body.id;
            let categoriaToUpdate: Categoria = await this.categoriaRepository.findById(id);
            categoriaToUpdate = {
                ...body
            } 
            const result: Categoria = await this.categoriaRepository.save(categoriaToUpdate);
            return res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            await this.categoriaRepository.delete(Number(id));
            res.status(200).json({ message: 'Deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
