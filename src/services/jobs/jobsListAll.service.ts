import { prisma } from "@PrismaClient";

const listAllJobsService = async () => {
  const avaiableJobs = await prisma.job.findMany({
    where: {
      status: "available",
    },
  });

  return avaiableJobs;
};

export default listAllJobsService;
