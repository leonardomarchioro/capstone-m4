import { ICandidateCreate } from "../../interfaces/candidate";
import { prisma } from "@PrismaClient";

const createCandidacyJobService = async ({
  userId,
  jobId,
}: ICandidateCreate) => {
  const newCandidate = await prisma.candidate.create({
    data: { jobId, userId },
  });

  return newCandidate;
};

export default createCandidacyJobService;
