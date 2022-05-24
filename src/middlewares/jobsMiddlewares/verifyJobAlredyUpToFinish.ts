import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyJobAlreadyUpToFinish = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { jobId } = request.params;
  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },
  });

  if (!job) {
    throw new AppError(404, "Job not exists!");
  }

  if (job.status === "available") {
    throw new AppError(409, "Job cannot be finished without a supplier");
  }
  if (job.status === "finished") {
    throw new AppError(409, "Job already finished");
  }

  next();
};

export default verifyJobAlreadyUpToFinish;
