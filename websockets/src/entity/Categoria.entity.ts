import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { PalabrasPorCategoria } from "./PalabrasPorCategoria.entity";

@Entity({ name: "categoria" })
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @OneToMany(() => PalabrasPorCategoria, palabrasPorCategoria => palabrasPorCategoria.categoria)
  palabrasPorCategoria: PalabrasPorCategoria[];
}
