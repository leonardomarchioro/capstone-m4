import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";

import { compare } from "bcryptjs";

import { Request, Response, NextFunction } from "express";

const verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { current_password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: req.userId } });

  const comparePassword = await compare(current_password, user!.password);

  if (!comparePassword) {
    return res.status(400).json({message: "Email or password invalid!"});
  }

  next();
};

export default verifyPassword;
