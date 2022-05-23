import { Request, Response } from "express";
import createJobService from "../../services/jobs/createJob.service";

const createJobController = async (request: Request, response: Response) => {
  const { title, description, deliveryDate, cep, categoryId } = request.body;

  const { userId } = request;

  const newJob = await createJobService({
    title,
    description,
    deliveryDate,
    cep,
    userId,
    categoryId,
  });

  const { users } = newJob;

  const jobData = {
    id: newJob.id,
    title: newJob.title,
    description: newJob.description,
    category: newJob.categories.name,
    deliveryDate: newJob.deliveryDate,
    cep: newJob.cep,
    status: newJob.status,
  };

  const userData = {
    id: users.id,
    name: users.name,
    email: users.email,
    phone: users.phone,
  };

  return response.status(201).json({
    message: "jobs has been sucessfully created!",
    Job: jobData,
    Client: userData,
  });
};

export default createJobController;
