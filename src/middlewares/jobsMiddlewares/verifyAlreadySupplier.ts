import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "../../prisma/client";

const verifyAlreadySupplier = async (
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

  if (job.status !== "available") {
    throw new AppError(409, "Supplier already selected!");
  }

  next();
};

export default verifyAlreadySupplier;
