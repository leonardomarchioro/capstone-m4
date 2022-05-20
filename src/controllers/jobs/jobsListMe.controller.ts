import { Request, Response } from "express";
import listMeJobsService from "../../services/jobs/jobsListMe.service.ts";

const listMeJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const myJobs = await listMeJobsService(userId);

  if (!myJobs) {
    return response.status(400).json({
      message: "Bad request",
    });
  }

  return response.status(200).json({
    message: "User jobs.",
    myJobs,
  });
};

export default listMeJobsController;