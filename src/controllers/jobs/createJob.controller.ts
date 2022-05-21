import { Request, Response } from "express";
import createJobService from "../../services/jobs/createJob.service";

const createJobController = async (request: Request, response: Response) => {
  const { title, description, deliveryDate, cep, category } = request.body;

  const { userId } = request;

  const newJob = await createJobService({
    title,
    description,
    deliveryDate,
    cep,
    userId,
    categoryId: category,
  });

  return response.status(201).json({
    message: "jobs has been sucessfully created!",
    newJob,
  });
};

export default createJobController;
