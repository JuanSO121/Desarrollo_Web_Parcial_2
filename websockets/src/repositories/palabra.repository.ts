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


    async associateToCategoria(palabraId: number, categoriaId: number) {
        const palabra = await this.repository.findOne({ where: { id: palabraId } });
        const categoria = await AppDataSource.getRepository(Categoria).findOne({ where: { id: categoriaId } });
    
        if (!palabra || !categoria) {
            throw new Error("Palabra or Categoria not found");
        }
    
        const palabraPorCategoria = new PalabrasPorCategoria();
        palabraPorCategoria.palabra = palabra;
        palabraPorCategoria.categoria = categoria;
    
        await this.palabrasPorCategoriaRepository.save(palabraPorCategoria);
    }
    
    async disassociateFromCategoria(palabraId: number, categoriaId: number) {
        const palabraPorCategoria = await this.palabrasPorCategoriaRepository.findOne({
            where: { 
                palabra: { id: palabraId }, 
                categoria: { id: categoriaId } 
            }
        });
        
        if (!palabraPorCategoria) {
            throw new Error("No association found between the given Palabra and Categoria");
        }
        
        await this.palabrasPorCategoriaRepository.remove(palabraPorCategoria);
    }
    
    
    
}
