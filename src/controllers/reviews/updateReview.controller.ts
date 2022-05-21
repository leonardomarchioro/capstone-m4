import { Request, Response } from "express";
import updateReviewService from "src/services/reviews/updateReview.service";

const updateReviewController = async (request: Request, response: Response) => {
  const { idReview } = request.params;
  const { score, comment } = request.body;

  await updateReviewService(idReview, { score, comment });

  return response.status(200).json({ message: "Review updated!" });
};

export default updateReviewController;
