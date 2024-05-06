import { SaladeJuego } from "../entity/SaladeJuego.entity";
import { AppDataSource } from "../data-source";
//ND
export class SaladeJuegoRepository {
    private repository = AppDataSource.getRepository(SaladeJuego);

    async findByNombre(nombre: string) {
        return this.repository.findOne({ where: { nombre } });
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }

    async findByEstado(estado: string) {
        return this.repository.findOne({ where: { estado } });
    }
    
    async save(SaladeJuego: SaladeJuego){
        return this.repository.save(SaladeJuego);
    }
   
    async delete(id: number){
        return this.repository.delete(id);
    }
}
