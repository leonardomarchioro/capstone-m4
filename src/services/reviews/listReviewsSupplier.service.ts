import { prisma } from "@PrismaClient";

const listReviewsSupplierService = async (idSupplier: string) => {
  const reviews = await prisma.supplierTaken.findMany({
    where: { userId: idSupplier },
    select: { jobs: { select: { reviews: true } } },
  });

  const changedReview = reviews.filter(
    (review) => review.jobs.reviews !== null
  );

  return changedReview;
};

export default listReviewsSupplierService;
