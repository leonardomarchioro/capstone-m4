import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Job } from "../Jobs/jobs.entity";

@Entity()
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

  @OneToMany((type) => Job, (Job) => Job.client, {
    eager: true,
  })
  jobsRequired: Job[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
