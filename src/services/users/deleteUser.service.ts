import { prisma } from "../../prisma/client";

const userDeleteService = async (userId: string) => {
  await prisma.user.delete({ where: { id: userId } });

  return true;
};

export default userDeleteService;
