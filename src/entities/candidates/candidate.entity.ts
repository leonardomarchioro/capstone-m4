import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Job } from "../Jobs/jobs.entity";
import { User } from "../User/user.entity";


@Entity("candidates")
export class Candidate{
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne( type => User, user => user.id, {
    eager: true,
  })
  @JoinColumn()
  userId: string; 
  
  @OneToOne( type => Job, job => job.id, {
    eager: true
  })
  @JoinColumn()
  jobId: string;

}