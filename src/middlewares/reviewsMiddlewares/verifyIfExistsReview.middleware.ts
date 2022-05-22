import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";
import { Review } from "@prisma/client";

const verifyIfExistsReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idJob } = req.params;

  const verify = await prisma.job.findUnique({
    where: {
      id: idJob,
    },
  });

  if (verify) {
    throw new AppError(409, "Review already exists!");
  }

  next();
};

export default verifyIfExistsReview;
