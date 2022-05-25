import request from "supertest";
import { Express } from "express";
import { IUserCreate } from "../../src/interfaces/user";
import { jobRequests } from "../index.spec";

export class ReviewsRequests {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  async createReview(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token } = await jobRequests.finishJob(
      userData,
      supplierData
    );
    const JobId = response.body.job.id;

    const reviewReq = await request(this.app)
      .post(`/review/${JobId}`)
      .send({
        score: 5,
        comment: "Teste",
      })
      .set("Authorization", `Bearer ${token}`);
    return { response: reviewReq, token, JobId };
  }
  async listJobReview(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token, JobId } = await this.createReview(
      userData,
      supplierData
    );

    const list = await request(this.app)
      .get(`/review/${JobId}`)
      .set("Authorization", `Bearer ${token}`);

    return { response: list, token };
  }

  async updateReview(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token } = await this.createReview(userData, supplierData);
    const reviewId = response.body.data.id;

    const updateReview = await request(this.app)
      .patch(`/review/${reviewId}`)
      .send({
        score: 4,
      })
      .set("Authorization", `Bearer ${token}`);

    return { response: updateReview, token };
  }

  async listSupplierReviews(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token } = await this.listJobReview(
      userData,
      supplierData
    );
    const supplierId = response.body.supplier.id;

    const listSupplier = await request(this.app)
      .get(`/review/supplier/${supplierId}`)
      .set("Authorization", `Bearer ${token}`);

    return { response: listSupplier, token };
  }
  async deleteReview(userData: IUserCreate, supplierData: IUserCreate) {
    const { response, token } = await this.createReview(userData, supplierData);
    const reviewId = response.body.data.id;

    const deleteReview = await request(this.app)
      .delete(`/review/${reviewId}`)
      .set("Authorization", `Bearer ${token}`);

    return { response: deleteReview, token };
  }
}
