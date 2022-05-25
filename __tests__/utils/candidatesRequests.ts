import request from "supertest";
import { Express } from "express";
import { ICandidateCreate } from "../../src/interfaces/candidate";
import { UserRequests } from "./userRequests";
import { app } from "../../src/app";
import { JobRequests } from "./jobRequests";
import { IUserCreate } from "../../src/interfaces/user";
// AQUI EU VOU CRIAR O FLUXO QUE A ROTA DEVE FAZER

const userRequests = new UserRequests(app);

const jobRequests = new JobRequests(app);

export class CandidatesRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async createCandidate(candidateInfo: ICandidateCreate) {
    const job = jobRequests.createJob;

    return await request(this.app).post("/candidate").send(candidateInfo);
  }
}
