import { Request, Response } from "express";
import UpdateJobInfoService from "../../services/jobs/jobsUpdate.service";
import { IUpdate } from "../../interface/jobs";

const UpdateJobInfoController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const { title, description, category, cep, deliveryDate } = request.body;
  const info: IUpdate = {
    title,
    description,
    category,
    cep,
    deliveryDate,
  };
  const updatedJob = UpdateJobInfoService({ id }, info);

  return response.status(200).json({
    message: "Job updated",
    updatedJob,
  });
};

export default UpdateJobInfoController;
