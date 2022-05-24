import { prisma } from "../../prisma/client";

export const userListAllSuppliers = async () => {
  const users = await prisma.user.findMany({
    where: {
      isSupplier: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      isSupplier: true,
    },
  });

  return users;
};

export default userListAllSuppliers;
