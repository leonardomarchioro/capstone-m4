import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import AppError from "../../errors/appError";

const verifyReviewAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const jobRepository = AppDataSource.getRepository(Job);

  const { jobId } = request.params;

  const job = await jobRepository.findOne({ where: { id: jobId } });

  if (job.review) {
    throw new AppError(409, "Cannot pass more than one review!");
  }

  next();
};

export default verifyReviewAlreadyExists;
