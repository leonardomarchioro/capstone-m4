import AppError from "../../errors/appError";
import { prisma } from "../../prisma/client";

const userListOneService = async (userId: string) => {
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

  if (!user) {
    throw new AppError(404, "User does not exists!");
  }

  return user;
};

export default userListOneService;
