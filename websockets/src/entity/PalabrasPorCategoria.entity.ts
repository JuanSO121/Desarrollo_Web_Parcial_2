import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { Categoria } from "./Categoria.entity";
import { Palabra } from "./Palabra.entity";

@Entity({ name: "PalabrasPorCategoria" })
export class PalabrasPorCategoria {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cate_id: number;

  @Column()
  pala_id: number;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: "cate_id" })
  categoria: Categoria;

  @ManyToOne(() => Palabra)
  @JoinColumn({ name: "pala_id" })
  palabra: Palabra;

}
