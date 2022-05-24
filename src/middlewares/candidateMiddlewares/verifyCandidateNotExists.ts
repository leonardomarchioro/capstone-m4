import { prisma } from "@PrismaClient";
import { Request, Response, NextFunction } from "express";
import AppError from "src/errors/appError";

const verifyCandidateNotExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { jobId } = request.body;
  const { userId } = request;

  const verify = await prisma.candidate.findMany({ where: { jobId } });

  if (verify.find((candidate) => candidate.userId === userId)) {
    throw new AppError(409, "You have already applied for this job");
  }

  next();
};

export default verifyCandidateNotExists;
