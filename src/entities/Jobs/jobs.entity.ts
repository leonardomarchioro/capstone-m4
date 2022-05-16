import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../User/user.entity";
import { Supplier } from "../Supplier/supplier.entity";
import { Review } from "../Reviews/reviews.entity";
import { Category } from "../Categories/categories.entity";

@Entity()
export class Job {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  delivery_date: Date;

  @Column()
  cep: string;

  @Column()
  type: string; //available - unavailable - doing - finished

  @ManyToOne((type) => User, (user) => user.jobsRequired)
  client: User;

  @ManyToOne((type) => Supplier, (supplier) => supplier.jobsTaken)
  supplier: Supplier;

  @OneToOne((type) => Review, {
    eager: true,
  })
  @JoinColumn()
  review: Review;

  @ManyToOne((type) => Category, (category) => category.name)
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
