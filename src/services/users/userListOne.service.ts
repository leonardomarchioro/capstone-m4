// import { IUserListOne } from "../../interfaces/user";
import { prisma } from "../../prisma/client";

const userListOneService = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      isSupplier: true,
    },
  });

  return user;
};

export default userListOneService;
