import request from "supertest";
import { Express } from "express";
import { IUserCreate } from "../../src/interfaces/user";
import { jobRequests, userRequests } from "../index.spec";

class CandidatesRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async createCandidate(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token } = await jobRequests.createJob(userData);
    const supplier = await userRequests.updateRole(supplierData);

    const jobId = response.body.Job.id;

    const candidate = await request(this.app)
      .post("/candidate")
      .send({ jobId })
      .set("Authorization", `Bearer ${supplier.token}`);

    return {
      response: candidate,
      token: supplier.token,
      clientToken: token,
      jobId,
      supplierId: supplier.supplierId,
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

export default CandidatesRequests;
