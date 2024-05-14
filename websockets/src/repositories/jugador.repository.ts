import { getRepository, Repository } from 'typeorm';
import { Jugador } from '../entity/jugador.entity';

export class JugadorRepository {
    private repository: Repository<Jugador>;

    constructor() {
        this.repository = getRepository(Jugador);
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }
    
    async save(jugador: Jugador){
        return this.repository.save(jugador);
    }
   
    async delete(id: number){
        return this.repository.delete(id);
    }

    async getAll(nombre?: string) {
        return this.repository.find({ where: nombre ? { nombre } : {} });
    }
}
