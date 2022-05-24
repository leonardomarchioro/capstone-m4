import listOneJobsService from "../../services/jobs/listOneJob.service";
import { Response, Request } from "express";

const listOneJobController = async (request: Request, response: Response) => {
  const { jobId } = request.params;

  const jobs = await listOneJobsService({ id: jobId });

  if (!jobs) {
    return response.status(404).json({
      message: "Job not found",
    });
  }

  const {
    supplierTaken,
    categories,
    cep,
    deliveryDate,
    description,
    id,
    reviews,
    status,
    title,
    users,
  } = jobs;

  const Supplier = supplierTaken === null ? {} : supplierTaken.users;

  return response.status(200).json({
    message: "Job are listed",
    job: {
      category: categories.name,
      cep,
      deliveryDate,
      description,
      id,
      status,
      title,
    },
    Client: users,
    Supplier,
    Review: reviews || {},
  });
};

export default listOneJobController;
