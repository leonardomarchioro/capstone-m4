import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";
import { IUserLogin } from "../../interfaces/login";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    return "Wrong email/password";
  }
  if (!compare(password, account.password)) {
    return "Wrong email/password";
  }

  const token = jwt.sign(
    { userId: account.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export default userLoginService;
