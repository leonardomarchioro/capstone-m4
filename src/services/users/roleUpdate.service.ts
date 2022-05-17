import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

const roleUpdateService = async (userId: string, role: string) => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.update(userId, { role });

  return true;
};

export default roleUpdateService;
