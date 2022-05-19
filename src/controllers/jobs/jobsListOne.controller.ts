import listJobsService from "../../services/jobs/jobsListOne.service";
import { Response, Request } from "express";
import AppError from "../../errors/appError";

const listOneJobController = async (request: Request, response: Response) => {
  const { id } = request.params;

  const job = await listJobsService(id);

  if (!job) {
    throw new AppError(404, "Job not found");
  }

  return response.status(200).json({
    message: "Job are listed",
    job,
  });
};

export default listOneJobController;
