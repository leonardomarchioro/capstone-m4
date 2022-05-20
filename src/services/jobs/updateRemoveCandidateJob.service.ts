import { prisma } from "@PrismaClient";

const updateRemoveCandidateJobService = async ({ id }: { id: string }) => {
  const jobPromise = prisma.job.update({
    where: {
      id: id,
    },
    data: {
      supplier_taken: null,
    },
  });

  const supplierTaken = prisma.supplierTaken.delete({
    where: {
      userId: id,
    },
  });

  await Promise.all([jobPromise, supplierTaken]);

  return true;
};

export default updateRemoveCandidateJobService;
