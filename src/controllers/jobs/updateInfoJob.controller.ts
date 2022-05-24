import { Request, Response } from "express";
import { IUpdate } from "src/interfaces/jobs";
import UpdateInfosJobService from "../../services/jobs/updateInfoJob.service";

const UpdateInfosJobController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const { title, description, categoryId, cep, deliveryDate } = request.body;

  const info: IUpdate = {
    title,
    description,
    categoryId,
    cep,
    deliveryDate: deliveryDate ? new Date(deliveryDate) : undefined,
  };

  const updatedJob = await UpdateInfosJobService(id, info);

  return response.status(200).json({
    message: "Job updated",
    Job: {
      id: updatedJob.id,
      title: updatedJob.title,
      description: updatedJob.description,
      category: updatedJob.categories.name,
      cep: updatedJob.cep,
      deliveryDate: updatedJob.deliveryDate,
    },
  });
};

export default UpdateInfosJobController;
