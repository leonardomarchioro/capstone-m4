import { prisma } from "../../prisma/client";

const listReviewsSupplierService = async (idSupplier: string) => {
  const reviews = await prisma.supplierTaken.findMany({
    where: { userId: idSupplier },
    select: { jobs: { select: { reviews: true, id: true } } },
  });

  const changedReview = reviews.filter(
    (review) => review.jobs.reviews !== null
  );

  return changedReview;
};

export default listReviewsSupplierService;
