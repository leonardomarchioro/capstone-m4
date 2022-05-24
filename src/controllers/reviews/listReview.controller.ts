import { Request, Response } from "express";
import AppError from "../../errors/appError";
import listReviewService from "../../services/reviews/listReviewJob.service";

const listReviewController = async (request: Request, response: Response) => {
  const { idJob } = request.params;

  const { reviews, supplierTaken, id } = await listReviewService(idJob);

  if (reviews === null) {
    throw new AppError(404, "Review does not exists!");
  }

  const formatReview = {
    id,
    score: reviews.score,
    comment: reviews.comment,
  };

  if (formatReview.comment === null) {
    delete formatReview.comment;
  }

  return response.status(200).json({
    jobId: id,
    review: formatReview,
    supplier: supplierTaken.users || {},
  });
};

export default listReviewController;
