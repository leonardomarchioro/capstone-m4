import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";
import { prisma } from "@PrismaClient";

const verifyDuplicatedEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const { userId } = req;

  if (!userId) {
    const verify = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (verify) {
      throw new AppError(409, "Email already exists!");
    }
  } else {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const allUsers = await prisma.user.findMany();

    const others = allUsers.filter(({ id }: { id: string }) => id !== user.id);

    if (others.find(({ email }: { email: string }) => email === user.email)) {
      throw new AppError(409, "Email already exists!");
    }
  }

  next();
};

export default verifyDuplicatedEmail;
