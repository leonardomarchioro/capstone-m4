import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyOwnJob = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = request;

  const { jobId } = request.body;

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });
  if (job.userId === userId) {
    throw new AppError(401, "Unauthorized!");
  }

  if (job.status !== "available") {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};

export default verifyOwnJob;
