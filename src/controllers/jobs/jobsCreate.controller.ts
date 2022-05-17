import { Request, Response } from "express";
import jobsCreateService from "../../services/jobs/createJob.servive";

const jobsCreateController = async (request: Request, response: Response) => {
  const { title, description, deliveryDate, cep, client, category } =
    request.body;

  const newJob = await jobsCreateService({
    title,
    description,
    deliveryDate,
    cep,
    client,
    category,
  });

  return response.status(201).json({
    message: "jobs has been sucessfully created!",
    newJob,
  });
};

export default jobsCreateController;
