import { prisma } from "../../prisma/client";

const deleteJobService = async ({ id }: { id: string }) => {
  await prisma.job.delete({
    where: {
      id,
    },
  });

  return true;
};

export default deleteJobService;
