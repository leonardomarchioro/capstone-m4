import AppError from "src/errors/appError";
import { prisma } from "../../prisma/client";

const listReviewsSupplierService = async (idSupplier: string) => {
  const reviews = await prisma.supplierTaken.findMany({
    where: { userId: idSupplier },
    select: { jobs: { select: { reviews: true, id: true } } },
  });

  if (!reviews.length) {
    throw new AppError(404, "Supplier not founded!");
  }

  const changedReview = reviews.filter(
    (review) => review.jobs.reviews !== null
  );

  return changedReview;
};

export default listReviewsSupplierService;
