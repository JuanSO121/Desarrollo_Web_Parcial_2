import { CategoriaResponse } from "../dto/categoria.dto";

export class SaladeJuegoResponse{
    id: number;
    nombre: string;
    estado: string;
    cate_id: CategoriaResponse; // Esta es la categoría a la que pertenece la sala de juego
}
