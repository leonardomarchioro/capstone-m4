import { IPasswordUpdate, IUserUpdate } from "../../interfaces/user";
import { hash } from "bcryptjs";
import { User } from "../../entities/User/user.entity";
import { AppDataSource } from "../../data-source";

const passwordUpdateService = async ({
  userId,
  new_password,
}: IPasswordUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const hashPassword = await hash(new_password, 10);

  const user = await userRepository.findOne({ where: { id: userId } });

  user.password = hashPassword;

  await userRepository.save(user);

  return true;
};

export default passwordUpdateService;
