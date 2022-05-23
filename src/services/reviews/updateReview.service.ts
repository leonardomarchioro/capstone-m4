import { prisma } from "@PrismaClient";
import { IUpdateReview } from "src/interfaces/review";

const updateReviewService = async (
  idReview: string,
  { score, comment }: IUpdateReview
) => {
  await prisma.review.update({
    data: { score, comment },
    where: { id: idReview },
  });

  return;
};

export default updateReviewService;
