import { prisma } from "../../prisma/client";

const userListOneService = async ( userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

export default userListOneService;
