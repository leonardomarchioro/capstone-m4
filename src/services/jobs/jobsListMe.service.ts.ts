import { prisma } from "@PrismaClient";

const listMeJobsService = async (userId: string) => {

  const allJobs = await prisma.job.findMany({
    where: {
      id: userId,
    },
  });

  return allJobs;
};

export default listMeJobsService;
