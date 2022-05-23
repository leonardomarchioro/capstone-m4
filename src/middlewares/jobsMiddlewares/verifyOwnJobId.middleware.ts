import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";
import { prisma } from "@PrismaClient";

const verifyOwnJob = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { userId } = request;

  const { id } = request.params;

  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  // para nao deixar ele se candidatar ao proprio servico requisitado
  if (job.userId !== userId) {
    throw new AppError(401, "Unauthorized!");
  }

  // verificar se ha vaga para se candidatar ao trabalho
  if (job.status !== "available") {
    throw new AppError(401, "Unauthorized!");
  }

  next();
};
