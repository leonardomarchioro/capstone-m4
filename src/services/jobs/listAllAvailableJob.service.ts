import { Job } from "@prisma/client";
import { prisma } from "@PrismaClient";

const listAllJobsService = async (userId: string) => {
  const avaiableJobs = await prisma.job.findMany({
    where: {
      status: "available",
    },
  });
  return avaiableJobs.filter((job: Job) => job.userId === userId);
};

export default listAllJobsService;
