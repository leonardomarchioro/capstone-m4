import { prisma } from "../../prisma/client";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const verifyJobExists = async (
  request: Request,
  respoonse: Response,
  next: NextFunction
) => {
  let { jobId } = request.body;

  if (!jobId) {
    jobId = request.params.idJob;
  }

  const verify = await prisma.job.findUnique({ where: { id: jobId } });

  if (!verify) {
    throw new AppError(400, "Job not exists!");
  }

  next();
};

export default verifyJobExists;
