import { Job } from "@prisma/client";
import { Request, Response } from "express";
import listMyJobsService from "../../services/jobs/listMyJobs.service";

const listMyJobsController = async (request: Request, response: Response) => {
  const { userId } = request;

  const myJobs = await listMyJobsService(userId);

  const formatData = myJobs.map((job) => {
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
      supplier: job.supplierTaken || {},
      review: job.reviews || {},
    };
  });

  return response.status(200).json({
    message: "User jobs",
    Jobs: formatData,
  });
};

export default listMyJobsController;
