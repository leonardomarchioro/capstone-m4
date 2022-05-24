import { prisma } from "@PrismaClient";
import e from "express";

const listAllJobsService = async (userId: string) => {
  const avaiableJobs = await prisma.job.findMany({
    where: {
      status: "available",
      users: {
        id: userId,
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      categories: { select: { name: true } },
      deliveryDate: true,
      status: true,
      cep: true,
      userId: true,
      users: { select: { id: true, name: true, email: true, phone: true } },
    },
  });

  return avaiableJobs.filter((job) => job.userId !== userId);
};

export default listAllJobsService;
