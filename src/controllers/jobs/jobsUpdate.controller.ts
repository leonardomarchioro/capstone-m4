import { Request, Response } from "express";
import { IUpdate } from "src/interfaces/jobs";
import UpdateJobInfoService from "../../services/jobs/jobsUpdate.service";

const UpdateJobInfoController = async (
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
  
  const updatedJob = await UpdateJobInfoService(id, info);

  return response.status(200).json({
    message: "Job updated",
    updatedJob,
  });
};

export default UpdateJobInfoController;
