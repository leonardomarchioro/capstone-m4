import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

const roleUpdateService = async (userId: string, role: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  user.role = role;

  await userRepository.save(user);

  return true;
};

export default roleUpdateService;
