import { prisma } from "@PrismaClient";

const userDeleteService = async (userId: string) => {
  await prisma.user.delete({ where: { id: userId } });

  return true;
};

export default userDeleteService;
