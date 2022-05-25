import request from "supertest";
import { Express } from "express";
import { IUserCreate } from "../../src/interfaces/user";
import { UserRequests } from "./userRequests";
import { IJobsCreate, IJobsReturn } from "../../src/interfaces/jobs/index";
import { app } from "../../src/app";

const userRequests = new UserRequests(app);

const JobData: IJobsCreate = {
  title: "Me ajuda de novo",
  description: "agora",
  cep: "1234567",
  deliveryDate: "2024-07-21",
  categoryId: 2,
};

export class JobRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async createJob(userData: IUserCreate) {
    const { token } = await userRequests.signIn(userData);

    const response = await request(this.app)
      .post("/job")
      .send(JobData)
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async listMyJobs(userData: IUserCreate) {
    const { token } = await this.createJob(userData);

    const response = await request(this.app)
      .get("/job/me")
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async listAllJobsAvailable(userData: IUserCreate, supplierData: IUserCreate) {
    await this.createJob(userData);
    const { token } = await userRequests.updateRole(supplierData);

    const response = await request(this.app)
      .get("/job/all")
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async listOneJob(userData: IUserCreate) {
    const { response, token } = await this.createJob(userData);

    const id: string = response.body.Job.id;

    const list = await request(this.app)
      .get(`/job/one/${id}`)
      .set("Authorization", `Bearer ${token}`);

    return { response: list, token };
  }
  async updateInfosJob(userData: IUserCreate) {
    const { response, token } = await this.createJob(userData);
    const id: string = response.body.Job.id;

    const update = await request(this.app)
      .patch(`/job/${id}`)
      .send({
        title: "Teste Update",
      })
      .set("Authorization", `Bearer ${token}`);

    return { response: update, token };
  }
  async deleteJob(userData: IUserCreate) {
    const { response, token } = await this.createJob(userData);
    const id: string = response.body.Job.id;

    const deleteJob = await request(this.app)
      .delete(`/job/${id}`)
      .set("Authorization", `Bearer ${token}`);

    return { response: deleteJob, token };
  }
}
