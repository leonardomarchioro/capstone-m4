import { prisma } from "@PrismaClient";

const candidateDeleteService = async (jobId: string) => {

  const deletedCandidate = await prisma.candidate.delete({ where: { jobId } });

  return deletedCandidate;
};

export default candidateDeleteService;
