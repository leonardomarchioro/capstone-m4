import { prisma } from "../../prisma/client";
import { IUpdateReview } from "../../interfaces/review";

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
