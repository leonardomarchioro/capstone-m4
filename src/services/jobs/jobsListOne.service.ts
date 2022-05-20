import { prisma } from "@PrismaClient";

const listJobsService = async ({ id }: { id: string }) => {
  const especifiedJob = prisma.job.findUnique({
    where: {
      id,
    },
  });

  return especifiedJob;
};

export default listJobsService;
