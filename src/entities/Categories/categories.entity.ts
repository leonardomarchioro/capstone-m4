import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;
}
