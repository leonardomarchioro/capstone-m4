import { prisma } from "@PrismaClient";

const getAllCandidatesService = async (jobId: string) => {
  const candidates = await prisma.candidate.findMany({
    where: {
      jobId,
    },
  });

  return candidates;
};

export default getAllCandidatesService;
