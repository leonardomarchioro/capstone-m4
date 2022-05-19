import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserLogin } from "../../interfaces/login";
import { compare } from "bcryptjs";
import { sign as signJWT } from "jsonwebtoken";
import AppError from "../../errors/appError";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    throw new AppError(401, "Wrong email/password");
  }
  if (!compare(password, user.password)) {
    throw new AppError(401, "Wrong email/password");
  }

  const token = signJWT({ userId: user.id }, String(process.env.SECRET_KEY), {
    expiresIn: "1d",
  });

  return token;
};

export default userLoginService;
