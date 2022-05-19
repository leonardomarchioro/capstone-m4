import { Request, Response } from "express";
import listMeJobsService from "../../services/jobs/jobsListMe.service";

const listMeJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const myJobs = (await listMeJobsService({ userId })) || [];

  return response.status(200).json(myJobs);
};

export default listMeJobsController;
