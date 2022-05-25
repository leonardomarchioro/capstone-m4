import request from "supertest";
import { Express } from "express";
import { IUserCreate } from "../../src/interfaces/user";

export class UserRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async signUp(userData: IUserCreate) {
    const response = await request(this.app)
      .post("/user/signup")
      .send(userData);
    return { response };
  }

  async signIn(userData: IUserCreate) {
    const { response } = await this.signUp(userData);

    const loginData = {
      email: userData.email,
      password: userData.password,
    };

    const responseReq = await request(this.app)
      .post("/user/signin")
      .send(loginData);

    return {
      response: responseReq,
      token: responseReq.body.token,
      userId: response.body.id,
    };
  }

  async listProfile(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .get("/user/me")
      .set("Authorization", `Bearer ${token}`);

    return { response, token };
  }

  async updateRole(userData: IUserCreate) {
    const { token, userId } = await this.signIn(userData);

    const updatedRole = {
      currentPassword: userData.password,
      role: true,
    };

    const response = await request(this.app)
      .patch("/user/role")
      .send(updatedRole)
      .set("Authorization", `Bearer ${token}`);

    return { response, token, supplierId: userId };
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
    const { token, response } = await this.signIn(userData);

    const responseReq = await request(this.app)
      .patch("/user/password")
      .send({
        currentPassword: userData.password,
        newPassword: "13579",
      })
      .set("Authorization", `Bearer ${token}`);
    return { response: responseReq, token, supplierId: response.body.id };
  }

  async deleteUser(userData: IUserCreate) {
    const { token } = await this.signIn(userData);

    const response = await request(this.app)
      .delete("/user/me")
      .set("Authorization", `Bearer ${token}`);
    return { response, token };
  }
}
