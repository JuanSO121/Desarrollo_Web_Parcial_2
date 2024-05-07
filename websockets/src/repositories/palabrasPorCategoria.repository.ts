import { AppDataSource } from "../data-source";

export class PalabrasPorCategoriaRepository {
    private repository = AppDataSource.getRepository("palabras_por_categoria");


}
