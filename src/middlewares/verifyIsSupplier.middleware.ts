import { AppDataSource } from "../data-source";
import { User } from "../entities/User/user.entity";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

const verifyIsSupplier = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = request;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (user.isSupplier == false) {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};

export default verifyIsSupplier;
