import { prisma } from "../../prisma/client";

const candidateDeleteService = async (jobId: string) => {
  await prisma.candidate.delete({ where: { jobId } });

  return true;
};

export default candidateDeleteService;
