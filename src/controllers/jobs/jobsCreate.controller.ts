import { Request, Response } from "express";
import jobsCreateService from "../../services/jobs/createJob.service";

const jobsCreateController = async (request: Request, response: Response) => {
  const { title, description, cep, deliveryDate, category } = request.body;
  const userId = request.userId;

  const newJob = await jobsCreateService({
    userId,
    title,
    description,
    cep,
    deliveryDate,
    category,
  });

  return response.status(201).json({
    message: "jobs has been sucessfully created!",
    newJob,
  });
};

export default jobsCreateController;
