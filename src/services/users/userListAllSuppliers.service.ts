import { prisma } from "../../prisma/client";

export const userListAllSuppliers = async () => {
  const users = await prisma.user.findMany({
    where: {
      isSupplier: true,
    },
  });

  return users;
};

export default userListAllSuppliers;
