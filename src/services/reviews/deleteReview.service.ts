import { prisma } from "../../prisma/client";

const deleteReviewService = async (idReview: string) => {
  await prisma.review.delete({ where: { id: idReview } });

  return;
};

export default deleteReviewService;
