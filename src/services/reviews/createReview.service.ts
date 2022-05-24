import { prisma } from "../../prisma/client";
import { ICreateReview } from "../../interfaces/review/index";

const createReviewService = async (
  idJob: string,
  { score, comment }: ICreateReview
) => {
  const newReview = await prisma.review.create({ data: { score, comment } });

  await prisma.job.update({
    where: { id: idJob },
    data: { reviewId: newReview.id },
  });

  return newReview;
};

export default createReviewService;
