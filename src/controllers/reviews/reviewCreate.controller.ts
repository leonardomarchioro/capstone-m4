import { Request, Response } from "express";
import reviewCreateService from "../../services/reviews/reviewCreate.service";

const reviewCreateController = async (request: Request, response: Response) => {
  const { score, comment } = request.body;
  const { jobId } = request.params;

  const review = await reviewCreateService(jobId, score, comment);

  return response.status(201).json({ review });
};

export default reviewCreateController;
