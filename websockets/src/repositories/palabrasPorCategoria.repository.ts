import { PalabrasPorCategoria } from "../entity/PalabrasPorCategoria.entity";
import { AppDataSource } from "../data-source";
//ND
export class PalabrasPorCategoriaRepository {
    private repository = AppDataSource.getRepository(PalabrasPorCategoria);


    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
    
    async delete(id: number){
        return this.repository.delete(id);
    }

}
