import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

export const userListAllSuppliers = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    where: {
      isSupplier: true,
    },
  });

  return users;
};

export default userListAllSuppliers;
