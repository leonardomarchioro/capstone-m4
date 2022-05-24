import { prisma } from "../../prisma/client";

const getAllCandidatesService = async (jobId: string) => {
  const candidates = await prisma.candidate.findMany({
    where: {
      jobId,
    },
    select: {
      id: true,
      users: { select: { id: true, name: true, email: true, phone: true } },
    },
  });

  return candidates;
};

export default getAllCandidatesService;
