import { prisma } from "@PrismaClient";

const listMyJobsService = async (userId: string) => {
  const allJobs = await prisma.job.findMany({
    where: {
      id: userId,
    },
  });

  return allJobs;
};

export default listMyJobsService;
