<<<<<<< HEAD
import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("reviews")
=======
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
>>>>>>> 31190111951efa073bf987d6037bacd1a15d8854
export class Review {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("integer")
  score: number;

<<<<<<< HEAD
  @Column()
  comment: string;
=======
  @Column({
    nullable: true
  })
  comment: string | null;
>>>>>>> 31190111951efa073bf987d6037bacd1a15d8854

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
