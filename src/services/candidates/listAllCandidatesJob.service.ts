import { prisma } from "@PrismaClient";

const listAllCandidatesJobService = async (jobId: string) => {
  const candidates = await prisma.candidate.findMany({
    where: { jobId },
  });

  return candidates;
};

export default listAllCandidatesJobService;
