import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity("types_jobs")
export class TypesJob {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;
}
