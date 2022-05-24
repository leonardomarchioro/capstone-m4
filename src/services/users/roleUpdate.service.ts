import { prisma } from "../../prisma/client";

const roleUpdateService = async (userId: string, isSupplier: boolean) => {
  await prisma.user.update({ where: { id: userId }, data: { isSupplier } });

  return true;
};

export default roleUpdateService;
