import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyIsSupplier = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = request;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user.isSupplier) {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};

export default verifyIsSupplier;
