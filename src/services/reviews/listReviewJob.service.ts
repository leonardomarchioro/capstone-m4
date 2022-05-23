import { prisma } from "@PrismaClient";

const listReviewService = async (idJob: string) => {
  const review = await prisma.job.findUnique({
    where: { id: idJob },
    select: { reviews: true, supplierTaken: true },
  });

  return review;
};

export default listReviewService;
