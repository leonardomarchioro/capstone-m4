import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

const roleUpdateService = async (userId: string, isSupplier: boolean) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  user.isSupplier = isSupplier;

  await userRepository.save(user);

  return true;
};

export default roleUpdateService;
