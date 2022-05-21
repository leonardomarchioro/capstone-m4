import listOneJobsService from "../../services/jobs/listOneJob.service";
import { Response, Request } from "express";

const listOneJobController = async (request: Request, response: Response) => {
  const { id } = request.params;

  const jobs = await listOneJobsService({ id });

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

export default listOneJobController;
