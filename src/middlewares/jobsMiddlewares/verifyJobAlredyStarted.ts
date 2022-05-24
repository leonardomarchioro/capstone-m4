import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyAlreadyStarted = async (
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

  if (job.status !== "available") {
    throw new AppError(409, "Job already started!");
  }

  next();
};

export default verifyAlreadyStarted;
