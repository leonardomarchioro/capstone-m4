import { prisma } from "@PrismaClient";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const generalCheckReview = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = request;
  let id = request.params.idJob;

  if (!id) {
    id = request.params.idReview;

    const checkIfIsClient = await prisma.job.findUnique({
      where: { reviewId: id },
      select: { userId: true },
    });

    if (checkIfIsClient.userId === userId) {
      return next();
    } else {
      throw new AppError(401, "Unauthorized");
    }
  } else {
    const checkIfIsClient = await prisma.job.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (checkIfIsClient.userId === userId) {
      return next();
    }

    throw new AppError(401, "Unauthorized");
  }
};
export default generalCheckReview;
