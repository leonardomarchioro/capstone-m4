import { Request, Response } from "express";
import updateCandidateJobService from "../../services/jobs/updateCandidateJob.service";

const updateCandidateJobController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.params;
  const { supplierId } = request.body;

  const { jobs, users } = await updateCandidateJobService({
    supplierId,
    jobId,
  });

  const { id, cep, categories, deliveryDate, description, title, status } =
    jobs;

  return response.status(200).json({
    message: "Select supplier!",
    Job: {
      id,
      title,
      description,
      category: categories.name,
      deliveryDate,
      cep,
      status,
      Client: jobs.users,
    },
    Supplier: users,
  });
};

export default updateCandidateJobController;
