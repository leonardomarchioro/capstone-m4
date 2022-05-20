import { IUserCreate } from "../../interfaces/user";
import { hash } from "bcryptjs";
import { prisma } from "../../prisma/client";

const userCreateService = async ({
  name,
  email,
  password,
  phone,
}: IUserCreate) => {
  const hashPassword = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashPassword,
      phone,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      isSupplier: true,
    },
  });

  return newUser;
};

export default userCreateService;
