import request from "supertest";
import { Express } from "express";
import { IUserCreate } from "../../src/interfaces/user";

export class UserRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async signUp(userData: IUserCreate) {
    return await request(this.app).post("/user/signup").send(userData);
  }
}
