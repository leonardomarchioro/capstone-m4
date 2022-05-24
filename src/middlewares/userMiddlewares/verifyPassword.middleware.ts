import { compare } from "bcryptjs";
import { prisma } from "../../prisma/client";

import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { currentPassword } = req.body;

  const user = await prisma.user.findUnique({ where: { id: req.userId } });

  const comparePassword = await compare(currentPassword, user.password);

  if (!comparePassword) {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};

export default verifyPassword;
