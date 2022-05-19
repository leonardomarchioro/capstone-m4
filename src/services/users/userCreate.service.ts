import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserCreate } from "../../interfaces/user";
import { hash } from "bcryptjs";

const userCreateService = async ({
  name,
  email,
  password,
  phone,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const hashPassword = await hash(password, 10);
  const userData = {
    name,
    email,
    password: hashPassword,
    phone,
  };

  const newUser = userRepository.create(userData);

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
