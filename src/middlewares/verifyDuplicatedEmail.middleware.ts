import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";

const verifyDuplicatedEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const verify = userRepository.findOne({
    where: { email },
  });

  if (verify) {
    return "Email already exists!";
  }
  next();
};

export default verifyDuplicatedEmail;
