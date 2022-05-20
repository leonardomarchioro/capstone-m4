import { IJobsCreate } from "src/interfaces/jobs";
import { prisma } from "@PrismaClient";

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

  const newJob = await prisma.job.create({ data: jobData });

  return newJob;
};

export default createJobService;
