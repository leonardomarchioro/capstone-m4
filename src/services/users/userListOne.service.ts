import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserListOne } from "../../interfaces/user";

const userListOneService = async ({ userId }: IUserListOne) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  return user;
};

export default userListOneService;
