import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Palabra } from "./Palabra.entity";
import { Categoria } from "./Categoria.entity";

@Entity({ name: "palabrasporcategoria" })
export class PalabrasPorCategoria {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Palabra, palabra => palabra.palabrasPorCategoria)
  palabra: Palabra;

  @ManyToOne(() => Categoria, categoria => categoria.palabrasPorCategoria)
  categoria: Categoria;
}
