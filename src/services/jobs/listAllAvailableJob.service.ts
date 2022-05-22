import { prisma } from "@PrismaClient";

const listAllJobsService = async (userId: string) => {
  const avaiableJobs = await prisma.job.findMany({
    where: {
      status: "available",
      users: {
        id: userId
      }
    },
  });

  return avaiableJobs;
};

export default listAllJobsService;
