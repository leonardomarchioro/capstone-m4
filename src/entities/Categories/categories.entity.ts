<<<<<<< HEAD
import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
=======
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Category {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;
>>>>>>> 31190111951efa073bf987d6037bacd1a15d8854
}
