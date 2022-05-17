import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserLogin } from "../../interfaces/login";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    return "Wrong email/password";
  }
  if (!compare(password, user.password)) {
    return "Wrong email/password";
  }

  const token = jwt.sign({ userId: user.id }, String(process.env.SECRET_KEY), {
    expiresIn: "1d",
  });

  return token;
};

export default userLoginService;
