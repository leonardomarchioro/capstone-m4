import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";

import { compare } from "bcryptjs";

import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { currentPassword } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: req.userId } });

  const comparePassword = await compare(currentPassword, user.password);

  if (!comparePassword) {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};

export default verifyPassword;
