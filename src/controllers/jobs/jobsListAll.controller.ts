import { Request, Response } from "express";
import listAllJobsService from "../../services/jobs/jobsListAll.service";

const listAllJobsController = async (request: Request, response: Response) => {
  const allJobs = listAllJobsService();

  if (!allJobs) {
    return response.status(400).json({
      message: "Bad request",
      allJobs,
    });
  }

  return allJobs;
};

export default listAllJobsController;
