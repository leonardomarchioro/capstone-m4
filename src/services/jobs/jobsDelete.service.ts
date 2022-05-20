import { prisma } from "@PrismaClient";

const jobDeleteService = async ({ id }: { id: string }) => {
  await prisma.job.delete({
    where:{
      id
    }
  });

  return true;
};

export default jobDeleteService;
