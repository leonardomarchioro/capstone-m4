import { prisma } from "@PrismaClient";

const listReviewsSupplierService = async (idSupplier: string) => {
  const reviews = prisma.supplierTaken.findUnique({
    where: { userId: idSupplier },
    select: { jobs: { select: { reviews: true } } },
  });

  return reviews;
};

export default listReviewsSupplierService;
