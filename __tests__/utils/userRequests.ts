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

  async signIn(userData: IUserCreate) {
    const { body } = await this.signUp(userData);

    const loginData = {
      email: body.email,
      password: "123456",
    };

    return await request(this.app).post("/user/signin").send(loginData);
  }

  async listMe(userData: IUserCreate) {
    const token = await this.signIn(userData);
    console.log(token.body);
    const response = await request(this.app)
      .get("/user/me")
      .set("Authorization", `Bearer ${token.body.token}`);

    return response;
  }
}
