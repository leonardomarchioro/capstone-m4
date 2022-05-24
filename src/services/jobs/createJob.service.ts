import { IJobsCreate } from "../../interfaces/jobs";
import { prisma } from "../../prisma/client";

const createJobService = async ({
  title,
  description,
  deliveryDate,
  cep,
  userId,
  categoryId,
}: IJobsCreate) => {
  const jobData = {
    title,
    description,
    deliveryDate: new Date(deliveryDate),
    cep,
    userId,
    categoryId,
  };

  const newJob = await prisma.job.create({
    data: jobData,
    select: {
      id: true,
      title: true,
      description: true,
      categories: true,
      deliveryDate: true,
      status: true,
      cep: true,
      users: { select: { id: true, name: true, email: true, phone: true } },
    },
  });

  return newJob;
};

export default createJobService;
