
import { Controller, Post, Body } from "@nestjs/common";
import { PalabrasPorCategoriaResponse } from "../dto/palabrasPorCategoria.dto";
import { PalabrasPorCategoriaRepository } from "../repositories/palabrasPorCategoria.repository";
import { Request, Response } from "express";

@Controller('palabrasPorCategoria')
export class PalabrasPorCategoriaController {
  private palabrasPorCategoriaRepository: PalabrasPorCategoriaRepository = new PalabrasPorCategoriaRepository();
  constructor(private readonly repo: PalabrasPorCategoriaRepository) {}

  @Post()
  async associate(@Body() dto: PalabrasPorCategoriaResponse) {
    return this.repo.associateWordsToCategory(dto.cate_id, dto.pala_id);
  }
    // ...otros métodos...
  
    public disassociate = async (req: Request, res: Response) => {
      const dto: PalabrasPorCategoriaResponse = req.body;
      try {
        await this.palabrasPorCategoriaRepository.disassociateWordsFromCategory(dto.cate_id, dto.pala_id);
        res.status(200).json({ message: 'Disassociated successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  




