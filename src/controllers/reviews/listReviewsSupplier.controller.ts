import { Request, Response } from "express";
import listReviewsSupplierService from "src/services/reviews/listReviewsSupplier.service";

const listReviewsSupplierController = async (
  request: Request,
  response: Response
) => {
  const { idSupplier } = request.params;

  const reviews = await listReviewsSupplierService(idSupplier);

  return response.status(200).json(reviews);
};

export default listReviewsSupplierController;
