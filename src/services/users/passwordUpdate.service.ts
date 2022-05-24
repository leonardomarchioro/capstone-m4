import { IPasswordUpdate } from "../../interfaces/user";
import { hash } from "bcryptjs";
import { prisma } from "../../prisma/client";

const passwordUpdateService = async ({
  userId,
  newPassword,
}: IPasswordUpdate) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  const hashPassword = await hash(newPassword, 10);

  user.password = hashPassword;

  await prisma.user.update({ where: { id: userId }, data: user });

  return true;
};

export default passwordUpdateService;
