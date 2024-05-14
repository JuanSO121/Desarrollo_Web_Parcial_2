import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria.entity";

@Entity({ name: "saladejuego" })
export class SaladeJuego extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  estado: string;

  @ManyToOne(() => Categoria, categoria => categoria.salasDeJuego)
  @JoinColumn({ name: "cate_id" })
  cate_id: Categoria;

  
}
