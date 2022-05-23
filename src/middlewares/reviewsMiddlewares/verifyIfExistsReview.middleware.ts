import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyIfExistsReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idJob } = req.params;

  const verifyIfExistsReview = await prisma.job.findUnique({
    where: {
      id: idJob,
    },
    select: { reviews: true },
  });

  if (verifyIfExistsReview.reviews) {
    throw new AppError(409, "Review already exists!");
  }

  next();
};

export default verifyIfExistsReview;
