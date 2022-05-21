import { prisma } from "@PrismaClient";

const updateCandidateJobService = async ({
  userId,
  id,
}: {
  userId: string;
  id: string;
}) => {
  const job = await prisma.job.update({
    where: {
      id,
    },
    data: {
      userId,
    },
  });

  return job;
};

export default updateCandidateJobService;
