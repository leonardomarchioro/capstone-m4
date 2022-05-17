import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

const userDeleteService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  console.log(userId);
  await userRepository.delete(userId);

  return true;
};

export default userDeleteService;
