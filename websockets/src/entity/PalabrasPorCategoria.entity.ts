import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria.entity";
import { Palabra } from "./Palabra.entity";

@Entity({ name: "PalabrasPorCategoria" })
export class PalabrasPorCategoria {

  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Categoria, (categoria) => categoria.palabrasPorCategoria)
  @JoinColumn({ name: "cate_id" })
  categoria: Categoria;

  // @ManyToOne(() => Palabra, (palabra) => palabra.palabrasPorCategoria)
  @JoinColumn({ name: "pala_id" })
  palabra: Palabra;

}
