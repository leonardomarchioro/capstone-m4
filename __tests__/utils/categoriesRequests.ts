import request from "supertest";
import { Express } from "express";
import { userRequests } from "../index.spec";
import { IUserCreate } from "../../src/interfaces/user";

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
