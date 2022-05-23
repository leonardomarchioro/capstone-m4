import { prisma } from "@PrismaClient";
import AppError from "src/errors/appError";

const listReviewService = async (idJob: string) => {
  const review = await prisma.job.findUnique({
    where: { id: idJob },
    select: {
      reviews: true,
      id: true,
      supplierTaken: {
        select: {
          users: { select: { id: true, name: true, email: true, phone: true } },
        },
      },
    },
  });

  if (!review) {
    throw new AppError(404, "Review not founded!");
  }

  return review;
};

export default listReviewService;
