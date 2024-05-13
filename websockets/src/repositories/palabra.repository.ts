import { Palabra } from "../entity/Palabra.entity";
import { AppDataSource } from "../data-source";
import { PalabrasPorCategoria } from "../entity/PalabrasPorCategoria.entity";
import { Categoria } from "../entity/Categoria.entity";

export class PalabraRepository {
    private repository = AppDataSource.getRepository(Palabra);
    private palabrasPorCategoriaRepository = AppDataSource.getRepository(PalabrasPorCategoria);
    async findByTexto(texto: string) {
        return this.repository.findOne({ where: { texto } });
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
    
    async save(palabra: Palabra){
        return this.repository.save(palabra);
    }
   
    async delete(id: number){
        return this.repository.delete(id);
    }
    async getAll(texto?: string) {
        return this.repository.find({where: texto ? {texto} : {}});
    }  
}
