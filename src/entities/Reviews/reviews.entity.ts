import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Review {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("integer")
  score: number;

  @Column({
    nullable: true
  })
  comment: string | null;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
