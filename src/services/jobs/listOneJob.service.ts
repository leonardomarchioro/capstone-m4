import { prisma } from "@PrismaClient";

const listOneJobsService = async ({ id }: { id: string }) => {
  const especifiedJob = prisma.job.findUnique({
    where: {
      id,
    },
    select: {
      supplierTaken: {
        select: {
          users: { select: { name: true, id: true, email: true, phone: true } },
        },
      },
      categories: true,
      cep: true,
      deliveryDate: true,
      description: true,
      id: true,
      reviews: true,
      status: true,
      title: true,
      users: { select: { name: true, id: true, email: true, phone: true } },
    },
  });

  return especifiedJob;
};

export default listOneJobsService;
