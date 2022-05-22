import { prisma } from "@PrismaClient";
import AppError from "src/errors/appError";

const listReviewService = async (idJob: string) => {
  const review = await prisma.job.findUnique({
    where: { id: idJob },
    select: { reviews: true, supplierTaken: true },
  });

  if (!review.reviews) {
    throw new AppError(401, "There is any review!");
  }

  return review;
};

export default listReviewService;
