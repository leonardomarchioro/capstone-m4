import { prisma } from "../../prisma/client";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const verifyJobIsFinished = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { idJob } = request.params;

  const verify = await prisma.job.findUnique({
    where: { id: idJob },
  });

  if (!verify) {
    throw new AppError(404, "Job nout founded!");
  }

  if (verify.status === "finished") {
    return next();
  }

  throw new AppError(400, "Job unfinished");
};
export default verifyJobIsFinished;
