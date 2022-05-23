import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyJobAlreadyUpToFinish = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (!job) {
    throw new AppError(404, "Job not exists!");
  }

  if (job.status === "available") {
    throw new AppError(409, "service cannot be finished without a supplier");
  }
  if (job.status === "finished") {
    throw new AppError(409, "service already finished");
  }

  next();
};

export default verifyJobAlreadyUpToFinish;
