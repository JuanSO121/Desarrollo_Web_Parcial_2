import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { PalabrasPorCategoria } from "./PalabrasPorCategoria.entity";
//ND
@Entity({ name: "palabra" })
export class Palabra extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  texto: string;

  @OneToMany(() => PalabrasPorCategoria, palabraPorCategoria => palabraPorCategoria.palabra)
  palabrasPorCategoria: PalabrasPorCategoria[];
}
