import { Request, Response } from "express";
import UpdateJobInfoService from "../../services/jobs/jobsUpdate.service";

const UpdateJobInfoController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const { title, description, category, cep, deliveryDate } = request.body;

  const updatedJob = UpdateJobInfoService(id, {
    title,
    description,
    category,
    cep,
    deliveryDate,
  });

  return response.status(200).json({
    message: "Job updated",
    updatedJob,
  });
};

export default UpdateJobInfoController;
