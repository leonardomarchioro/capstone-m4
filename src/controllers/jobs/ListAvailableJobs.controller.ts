import { Request, Response } from "express";
import listAllJobsService from "../../services/jobs/listAllAvailableJob.service";

const listAllJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const allJobs = (await listAllJobsService(userId)) || [];

  const formatData = allJobs.map((job) => {
    return {
      infos: {
        id: job.id,
        title: job.title,
        description: job.description,
        category: job.categories.name,
        deliveryDate: job.deliveryDate,
        status: job.status,
        cep: job.cep,
      },
      client: job.users,
    };
  });

  return response.status(200).json(formatData);
};

export default listAllJobsController;
