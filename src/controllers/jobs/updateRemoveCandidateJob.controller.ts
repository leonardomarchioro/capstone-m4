import { Request, Response } from "express";
import AppError from "src/errors/appError";
import updateRemoveCandidateJobService from "../../services/jobs/updateRemoveCandidateJob.service";

const updateRemoveCandidateJobController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  await updateRemoveCandidateJobService(id);

  return response.status(200).json({
    message: "Supplier removed!",
  });
};

export default updateRemoveCandidateJobController;
