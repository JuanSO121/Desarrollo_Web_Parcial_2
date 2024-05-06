import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany  } from "typeorm";
import { PalabrasPorCategoria } from "./PalabrasPorCategoria.entity";
//ND
@Entity({ name: "categoria" })
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @OneToMany(() => PalabrasPorCategoria, palabraPorCategoria => palabraPorCategoria.categoria)
  palabrasPorCategoria: PalabrasPorCategoria[];
}
