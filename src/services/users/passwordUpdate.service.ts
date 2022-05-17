import { IPasswordUpdate, IUserUpdate } from "../../interfaces/user";
import { hash } from "bcryptjs";
import { User } from "../../entities/User/user.entity";
import { AppDataSource } from "../../data-source";

const passwordUpdateService = async ({
  userId,
  newPassword,
}: IPasswordUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const hashPassword = await hash(newPassword, 10);

  await userRepository.update(userId, { password: hashPassword });

  return true;
};

export default passwordUpdateService;
