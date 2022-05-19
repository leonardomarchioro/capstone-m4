import { prisma } from "../../prisma/client";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (
  userId: string,
  { name, email, phone }: IUserUpdate
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  name = name ? name : user.name;
  email = email ? email : user.email;
  phone = phone ? phone : user.phone;

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { name, email, phone },
  });

  return updatedUser;
};

export default userUpdateService;
