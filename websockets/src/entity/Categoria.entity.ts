import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { PalabrasPorCategoria } from "./PalabrasPorCategoria.entity";
import { SaladeJuego } from "./SaladeJuego.entity"; // Asegúrate de importar tu entidad SaladeJuego

@Entity({ name: "categoria" })
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @OneToMany(() => PalabrasPorCategoria, palabrasPorCategoria => palabrasPorCategoria.categoria)
  palabrasPorCategoria: PalabrasPorCategoria[];

  @OneToMany(() => SaladeJuego, saladeJuego => saladeJuego.cate_id)
  salasDeJuego: SaladeJuego[];
}
