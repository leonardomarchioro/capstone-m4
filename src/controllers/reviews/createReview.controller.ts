import { Request, Response } from "express";
import createReviewService from "src/services/reviews/createReview.service";

const createReviewController = async (request: Request, response: Response) => {
  const { idJob } = request.params;
  const { score, comment } = request.body;

  const newReview = await createReviewService(idJob, { score, comment });

  const formatReview = {
    id: newReview.id,
    score: newReview.score,
    comment: newReview.comment,
  };

  if (formatReview.comment === null) {
    delete formatReview.comment;
  }

  return response
    .status(201)
    .json({ message: "review published successfully!", data: formatReview });
};
export default createReviewController;
