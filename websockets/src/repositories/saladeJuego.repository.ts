import { SaladeJuego } from "../entity/SaladeJuego.entity";
import { AppDataSource } from "../data-source";
import { Like } from "typeorm";
export class SaladeJuegoRepository {
    private repository = AppDataSource.getRepository(SaladeJuego);
    
    async findByNombre(nombre: string) {
        return this.repository.findOne({ where: { nombre } });
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
    
    async save(saladeJuego: SaladeJuego) {
        return this.repository.save(saladeJuego);
    }
   
    async delete(id: number) {
        return this.repository.delete(id);
    }

    async findAllByNombre(nombre: string) {
        return this.repository.find({ where: { nombre } });
    }

    async findAllByEstado(estado: string) {
        return this.repository.find({ where: { estado: estado } });
    }
    
    async getAll(id?: number) {
        return this.repository.find(id ? { where: { id } } : {});
    }

    async findByName(nombre: string) {
        return this.repository.find({ where: { nombre } });
    }

    async findByCategory(cate_id: number) {
        return this.repository.find({ where: { cate_id: { id: cate_id } } });
    }
    
    
    async findByState(estado: string) {
        return this.repository.find({ where: { estado } });
    }

    async findBySalaId(salaId: number) {
        // Realizar una consulta personalizada para obtener las palabras asociadas a la sala de juego
        const query = this.repository.createQueryBuilder("saladejuego")
            .leftJoinAndSelect("saladejuego.cate_id", "categoria")
            .leftJoinAndSelect("categoria.palabrasPorCategoria", "palabrasPorCategoria")
            .leftJoinAndSelect("palabrasPorCategoria.palabra", "palabra")
            .where("saladejuego.id = :salaId", { salaId })
            .getOne();

        return query;
    }

    
    
}
