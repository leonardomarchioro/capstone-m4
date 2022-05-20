import { Request, Response } from "express";
import listAllJobsService from "../../services/jobs/listAllAvailableJob.service";

const listAllJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const allJobs = (await listAllJobsService(userId)) || [];

  return response.status(200).json(allJobs);
};

export default listAllJobsController;
