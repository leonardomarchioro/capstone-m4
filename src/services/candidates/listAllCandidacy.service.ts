import { prisma } from "@PrismaClient";

const listAllCandidacyService = async (userId: string) => {
  const candidacy = await prisma.candidate.findMany({
    where: { userId },
  });

  return candidacy;
};

export default listAllCandidacyService;
