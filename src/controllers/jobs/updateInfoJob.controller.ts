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
    deliveryDate,
  };

  const updatedJob = await UpdateInfosJobService(id, info);

  return response.status(200).json({
    message: "Job updated",
    updatedJob,
  });
};

export default UpdateInfosJobController;
