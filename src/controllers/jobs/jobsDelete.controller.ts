import { Request, Response } from "express";
import jobDeleteService from "../../services/jobs/jobsDelete.service";

const jobDeleteController = async (request: Request, response: Response) => {
  const { id } = request.params;

  const isDeleted = await jobDeleteService({ id });

  if (!isDeleted) {
    return response.status(400).json({
      message: "Bad request",
    });
  }

  return response.status(200).json({
    message: "Jobs has been deleted",
  });
};

export default jobDeleteController;
