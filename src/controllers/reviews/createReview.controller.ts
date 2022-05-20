import { Request, Response } from "express";
import createReviewService from "src/services/reviews/createReview.service";

const createReviewController = async (request: Request, response: Response) => {
  const { idJob } = request.params;
  const { score, comment } = request.body;

  const newReview = await createReviewService(idJob, { score, comment });

  return response.status(201).json(newReview);
};
export default createReviewController;
