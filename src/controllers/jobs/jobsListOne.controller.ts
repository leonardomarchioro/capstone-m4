import listJobsService from "../../services/jobs/jobsListOne.service";
import { Response, Request } from "express";

const listJobController = async (request: Request, response: Response) => {
  const { id } = request.params;

  const jobs = await listJobsService({ id });

  if (!jobs) {
    return response.status(400).json({
      message: "Bad request",
    });
  }

  return response.status(200).json({
    message: "Job are listed",
    jobs,
  });
};
