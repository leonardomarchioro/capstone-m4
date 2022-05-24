import { prisma } from "@PrismaClient";

const deleteReviewService = async (idReview: string) => {
  await prisma.review.delete({ where: { id: idReview } });

  return;
};

export default deleteReviewService;
