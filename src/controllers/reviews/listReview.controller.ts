import { Request, Response } from "express";
import listReviewService from "src/services/reviews/listReviewJob.service";

const listReviewController = async (request: Request, response: Response) => {
  const { idJob } = request.params;

  const { reviews, supplierTaken } = await listReviewService(idJob);

  return response
    .status(200)
    .json({ review: reviews || {}, supplier: supplierTaken || {} });
};

export default listReviewController;
