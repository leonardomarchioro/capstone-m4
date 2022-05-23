import { Request, Response } from "express";
import updateFinishJobService from "../../services/jobs/updateFinishJob.service";

const updateFinishJobController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.params;

  const supplier = await updateFinishJobService({ jobId });

  const {
    supplierTaken,
    categories,
    cep,
    deliveryDate,
    description,
    id,
    status,
    title,
    users,
  } = supplier;

  return response.status(200).json({
    message: "Job finished!",
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
    Supplier: supplierTaken.users,
  });
};

export default updateFinishJobController;
