import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
//ND
@Entity({ name: "palabra" })
export class Palabra extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  texto: string;
}
