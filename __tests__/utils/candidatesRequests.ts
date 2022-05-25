import request from "supertest";
import { Express } from "express";
import { ICandidateCreate } from "../../src/interfaces/candidate";
import { UserRequests } from "./userRequests";
import { app } from "../../src/app";
import { JobRequests } from "./jobRequests";
import { IUserCreate } from "../../src/interfaces/user";

const userRequests = new UserRequests(app);

const jobRequests = new JobRequests(app);

export class CandidatesRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async createCandidate(userData: IUserCreate, supplierData: IUserCreate) {
    const { response } = await jobRequests.createJob(userData);
    const { token } = await userRequests.updateRole(supplierData);

    const jobId = response.body.Job.id;

    const candidate = await request(this.app)
      .post("/candidate")
      .send({ jobId })
      .set("Authorization", `Bearer ${token}`);

    return {
      response: candidate,
      token,
    };
  }

  async listAllApplication(userData: IUserCreate, supplierData: IUserCreate) {
    await this.createCandidate(userData, supplierData);
    const { token } = await userRequests.updateRole(supplierData);

    const response = await request(this.app)
      .get("/candidate/me")
      .set("Authorization", `Bearer ${token}`);

    return {
      response,
      token,
    };
  }

  async listAllCandidates(userData: IUserCreate, supplierData: IUserCreate) {
    const { response } = await this.createCandidate(userData, supplierData);
    const { token } = await userRequests.updateRole(supplierData);

    const jobId = response.body.Job.id;

    const allCandidates = await request(this.app)
      .get(`/candidate/job/${jobId}`)
      .set("Authorization", `Bearer ${token}`);

    return {
      response: allCandidates,
      token,
    };
  }

  async deleteCandidate(userData: IUserCreate, supplierData: IUserCreate) {
    const { response } = await this.createCandidate(userData, supplierData);
    const { token } = await userRequests.updateRole(supplierData);
    const jobId = response.body.Job.id;

    const deletedCandidate = await request(this.app)
      .delete(`/candidate/job/${jobId}`)
      .set("Authorization", `Bearer ${token}`);

    return {
      response: deletedCandidate,
      token,
    };
  }
}
