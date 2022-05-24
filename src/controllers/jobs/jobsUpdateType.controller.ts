import { Request, Response } from "express";
import updateRemoveCandidateJob from "../../services/jobs/updateRemoveCandidateJob.service";

const updateJobTypeCandidateController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const supplier = await updateRemoveCandidateJob(id);

  return response.status(200).json({
    message: "Type updated!",
    supplier,
  });
};

export default updateJobTypeCandidateController;
