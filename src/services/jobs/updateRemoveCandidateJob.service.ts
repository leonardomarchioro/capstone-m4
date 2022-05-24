import { prisma } from "../../prisma/client";

const updateRemoveCandidateJobService = async (id: string) => {
  await prisma.job.update({ where: { id }, data: { status: "available" } });

  await prisma.supplierTaken.delete({ where: { jobId: id } });

  return true;
};

export default updateRemoveCandidateJobService;
