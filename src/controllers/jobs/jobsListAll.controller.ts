import { Request, Response } from "express";
import listAllJobsService from "../../services/jobs/jobsListAll.service";

const listAllJobsController = async (request: Request, response: Response) => {
  const allJobs = (await listAllJobsService()) || [];

  return response.status(200).json(allJobs);
};

export default listAllJobsController;
