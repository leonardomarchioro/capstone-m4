import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Job } from "../Jobs/jobs.entity";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ 
    default: false,
    name: "is_supplier"
  })
  isSupplier: boolean;

  @OneToMany((type) => Job, (Job) => Job.user, {
    eager: true,
  })
  jobsRequired: Job[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
