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
    await this.signUp(userData);

    const loginData = {
      email: userData.email,
      password: userData.password,
    };

    const response = await request(this.app)
      .post("/user/signin")
      .send(loginData);

    return { response, token: response.body.token };
  }

  async listProfile(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .get("/user/me")
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async updateRole(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const updatedRole = {
      currentPassword: userData.password,
      role: true,
    };

    const response = await request(this.app)
      .patch("/user/role")
      .send(updatedRole)
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async listAllSuppliers(userData: IUserCreate) {
    const { token } = await this.updateRole(userData);

    const response = await request(this.app)
      .get("/user/suppliers")
      .set("Authorization", `Bearer ${token}`);
    return { response, token };
  }

  async updateProfile(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .patch("/user/me")
      .send({ name: "João" })
      .set("Authorization", `Bearer ${token}`);
    return { response, token };
  }

  async updatePassword(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .patch("/user/password")
      .send({
        currentPassword: userData.password,
        newPassword: "13579",
      })
      .set("Authorization", `Bearer ${token}`);
    return { response, token };
  }

  async deleteUser(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .delete("/user/me")
      .set("Authorization", `Bearer ${token}`);
    return { response, token };
  }
}
