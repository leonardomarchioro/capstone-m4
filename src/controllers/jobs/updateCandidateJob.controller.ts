import { Request, Response } from "express";
import updateCandidateJobService from "../../services/jobs/updateCandidateJob.service";

const updateCandidateJobController = async (
  request: Request,
  response: Response
) => {
  const { userId } = request;
  const { id } = request.params;

  const supplier = await updateCandidateJobService({ userId, id });

  return response.status(200).json({
    message: "Supplier updated!",
    supplier,
  });
};

export default updateCandidateJobController;
