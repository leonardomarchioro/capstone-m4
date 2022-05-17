import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (
  userId: string,
  { name, email, phone }: IUserUpdate
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  name ? name : user.name;
  email ? email : user.email;
  phone ? phone : user.phone;

  const updatedUser = userRepository.update(userId, { name, email, phone });

  return updatedUser;
};

export default userUpdateService;
