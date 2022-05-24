import { prisma } from "@PrismaClient";

const deleteJobService = async ({ id }: { id: string }) => {
  await prisma.job.delete({
    where: {
      id,
    },
  });

  return true;
};

export default deleteJobService;
