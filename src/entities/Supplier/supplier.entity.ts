import {
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../User/user.entity";
import { Job } from "../Jobs/jobs.entity";

@Entity()
export class Supplier {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToOne((type) => User, {
    eager: true,
  })
  @JoinColumn()
  user: User;

  @OneToMany((type) => Job, (Job) => Job.supplier, {
    eager: true,
  })
  jobsTaken: Job[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
