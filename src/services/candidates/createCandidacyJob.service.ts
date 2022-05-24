import { ICandidateCreate } from "../../interfaces/candidate";
import { prisma } from "@PrismaClient";

const createCandidacyJobService = async ({
  userId,
  jobId,
}: ICandidateCreate) => {
  const newCandidate = await prisma.candidate.create({
    data: { jobId, userId },
    select: {
      id: true,
      users: { select: { id: true, name: true, email: true, phone: true } },
      jobs: {
        select: {
          id: true,
          title: true,
          categories: { select: { name: true } },
          cep: true,
          description: true,
          deliveryDate: true,
          users: { select: { id: true, name: true, email: true, phone: true } },
        },
      },
    },
  });

  return newCandidate;
};

export default createCandidacyJobService;
