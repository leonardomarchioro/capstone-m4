import { Request, Response } from "express";
import listAllJobsService from "../../services/jobs/jobsListAll.service";

const listAllJobsController = async (request: Request, response: Response) => {
  const allJobs = (await listAllJobsService()) || [];

  return allJobs;
};

export default listAllJobsController;
