import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Job } from "../Jobs/jobs.entity";

<<<<<<< HEAD
@Entity("users")
=======
@Entity()
>>>>>>> 31190111951efa073bf987d6037bacd1a15d8854
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

<<<<<<< HEAD
=======
  @Column({
    enum: [ "client", "supplier" ],
    default: "client",
    enumName: "role_enum"
  })
  role: string;

>>>>>>> 31190111951efa073bf987d6037bacd1a15d8854
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
