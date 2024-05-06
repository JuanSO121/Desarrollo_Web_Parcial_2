import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
//ND
@Entity({ name: "categoria" })
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nombre: string;
}
