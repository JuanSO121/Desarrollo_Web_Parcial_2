import { Request, Response } from "express";
import { PalabrasPorCategoriaRepository } from "../repositories/palabrasPorCategoria.repository";
import { AppDataSource } from "../data-source";

export class PalabrasPorCategoriaController {
    private palabrasPorCategoriaRepository: PalabrasPorCategoriaRepository = new PalabrasPorCategoriaRepository();


}
