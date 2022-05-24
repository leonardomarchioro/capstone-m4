import { Request, Response } from "express";
import deleteReviewService from "../../services/reviews/deleteReview.service";

const deleteReviewController = async (request: Request, response: Response) => {
  const { idReview } = request.params;

  await deleteReviewService(idReview);

  return response.status(204).json({ message: "Review deleted" });
};

export default deleteReviewController;
