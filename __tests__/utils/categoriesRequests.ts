import request from "supertest";
import { Express } from "express";
import { app } from "../../src/app";
import { UserRequests } from "./userRequests";
import { IUserCreate } from "../../src/interfaces/user";

const userRequests = new UserRequests(app);

export class CategoriesRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async listAllCategories(userData: IUserCreate) {
    const { token } = await userRequests.signIn(userData);
    return await request(this.app)
      .get("/category/list")
      .set("Authorization", `Bearer ${token}`);
  }
}
