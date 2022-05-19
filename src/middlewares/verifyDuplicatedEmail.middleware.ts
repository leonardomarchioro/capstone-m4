import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";
import { prisma } from "@PrismaClient"

const verifyDuplicatedEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  
  const verify = await prisma.user.findUnique({
    where: { 
      email
    },
  });

  if (verify) {
    throw new AppError(409, "Email already exists!");
  }
  next();
};

export default verifyDuplicatedEmail;
