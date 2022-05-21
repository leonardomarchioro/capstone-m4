// import { AppDataSource } from "../../data-source";
// import { User } from "../../entities/User/user.entity";
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
  });

  return newUser;
};

export default userCreateService;
