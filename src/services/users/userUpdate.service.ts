import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (
  userId: string,
  { name, email, phone }: IUserUpdate
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  user.name = name ? name : user.name;
  user.email = email ? email : user.email;
  user.phone = phone ? phone : user.phone;

  const updatedUser = await userRepository.save(user);

  return updatedUser;
};

export default userUpdateService;
