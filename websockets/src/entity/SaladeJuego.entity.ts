import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
//ND
@Entity({ name: "saladeJuego" })
export class SaladeJuego extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  estado: string;
}
