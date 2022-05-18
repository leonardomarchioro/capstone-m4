import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../User/user.entity";
import { Review } from "../Reviews/reviews.entity";
import { Category } from "../Categories/categories.entity";
import { TypesJob } from "../TypesJob/typesJob.entity";

@Entity("jobs")
export class Job {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    name: "delivery_date",
    type: "timestamp with time zone",
  })
  deliveryDate: Date;

  @Column()
  cep: string;

  @ManyToOne((type) => TypesJob, (type) => type.name)
  type: TypesJob;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @OneToOne((type) => Review, {
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  review: Review | null;

  @ManyToOne((type) => Category, (category) => category.name)
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
