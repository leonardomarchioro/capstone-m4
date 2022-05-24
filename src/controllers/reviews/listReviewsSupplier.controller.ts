import { Request, Response } from "express";
import listReviewsSupplierService from "../../services/reviews/listReviewsSupplier.service";

const listReviewsSupplierController = async (
  request: Request,
  response: Response
) => {
  const { idSupplier } = request.params;

  const reviews = await listReviewsSupplierService(idSupplier);

  const formatReviews = reviews.map(({ jobs }) => {
    const formatReview = {
      id: jobs.reviews.id,
      score: jobs.reviews.score,
      comment: jobs.reviews.comment,
    };

    if (formatReview.comment === null) {
      delete formatReview.comment;
    }

    return {
      JobId: jobs.id,
      Review: formatReview,
    };
  });

  return response.status(200).json(formatReviews);
};

export default listReviewsSupplierController;
