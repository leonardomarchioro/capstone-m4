import { Request, Response } from "express";
import deleteJobService from "../../services/jobs/deleteJob.service";

const deleteJobController = async (request: Request, response: Response) => {
  const { id } = request.params;

  const isDeleted = await deleteJobService({ id });

  if (!isDeleted) {
    return response.status(400).json({
      message: "Bad request",
    });
  }

  return response.sendStatus(204);
};

export default deleteJobController;
