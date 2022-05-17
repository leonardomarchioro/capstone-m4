import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";

import { compare } from "bcryptjs";

import { Request, Response, NextFunction } from "express";

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
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyPassword;
