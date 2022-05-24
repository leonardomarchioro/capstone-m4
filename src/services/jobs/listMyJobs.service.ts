import { prisma } from "../../prisma/client";

const listMyJobsService = async (userId: string) => {
  const allJobs = await prisma.job.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      categories: { select: { name: true } },
      deliveryDate: true,
      status: true,
      cep: true,
      supplierTaken: {
        select: {
          users: { select: { id: true, name: true, email: true, phone: true } },
        },
      },
      reviews: true,
    },
  });

  return allJobs;
};

export default listMyJobsService;
