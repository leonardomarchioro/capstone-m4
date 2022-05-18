import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";
import AppError from "../errors/appError";

const verifyDuplicatedEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const verify = await userRepository.findOne({
    where: { email },
  });

  if (verify) {
    throw new AppError("Email already exists!", 409);
  }
  next();
};

export default verifyDuplicatedEmail;
