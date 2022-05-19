import { Request, Response } from "express";
import updateJobRemoveCandidateService from "../../services/jobs/jobsUpdateRemoveCandidate.service";

const updateJobRemoveCandidateController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const supplier = await updateJobRemoveCandidateService({ id });

  return response.status(200).json({
    message: "Supplier removed!",
    supplier,
  });
};

export default updateJobRemoveCandidateController;
