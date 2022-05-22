import { prisma } from "@PrismaClient";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const verifyJobIsFinished = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { idJob } = request.params;
  const { userId } = request;

  const verifyStatus = await prisma.job.findUnique({
    where: { id: idJob },

  });

  if (verifyStatus.status === "finished") {
    return next();
  }

  throw new AppError(400, "Job unfinished");
  
};
export default verifyJobIsFinished;