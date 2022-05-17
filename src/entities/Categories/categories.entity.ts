import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Category {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;
}
