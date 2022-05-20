import { Request, Response } from "express";
import updateRemoveCandidateJobService from "../../services/jobs/updateRemoveCandidateJob.service";

const updateRemoveCandidateJobController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const supplier = await updateRemoveCandidateJobService({ id });

  return response.status(200).json({
    message: "Supplier removed!",
    supplier,
  });
};

export default updateRemoveCandidateJobController;
