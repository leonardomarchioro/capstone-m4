import { prisma } from "@PrismaClient";

const listOneJobsService = async ({ id }: { id: string }) => {
  const especifiedJob = prisma.job.findUnique({
    where: {
      id,
    },
  });

  return especifiedJob;
};

export default listOneJobsService;
