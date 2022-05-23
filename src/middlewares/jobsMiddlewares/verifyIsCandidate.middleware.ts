import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyIsCandidate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { idJob } = request.params;
  const { supplierId } = request.body;

  const candidates = await prisma.candidate.findMany({
    where: {
      jobId: idJob,
    },
  });

  if (candidates.find((candidate) => candidate.userId == supplierId)) {
    return next();
  }

  throw new AppError(409, "Candidate not found!");
};

export default verifyIsCandidate;
