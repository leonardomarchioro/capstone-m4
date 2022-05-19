import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Job } from "../Jobs/jobs.entity";
import { User } from "../User/user.entity";
import { v4 as uuid } from "uuid";

@Entity("supplier_taken")
export class SupplierTaken {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.id, {
    eager: true,
  })
  @JoinColumn()
  user: User;

  @OneToOne((type) => Job, (job) => job.id, {
    eager: true,
  })
  @JoinColumn()
  job: Job;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
