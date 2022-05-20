import { Request, Response } from "express";
import listMyJobsService from "../../services/jobs/listMyJobs.service";

const listMyJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const myJobs = await listMyJobsService(userId);

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

export default listMyJobsController;
