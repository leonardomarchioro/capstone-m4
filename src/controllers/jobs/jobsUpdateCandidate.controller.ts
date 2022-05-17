import { Request, Response } from "express";
import { IJobsCreate } from "../../interface/jobs";
import updateJobCandidateService from "../../services/jobs/jobsUpdateCandidate.service";

const updateJobCandidateController = async (
  request: Request,
  response: Response
) => {
  const { userId } = request;
  const { id } = request.params;

  const supplier = await updateJobCandidateService({ userId, id });

  return response.status(200).json({
    message: "Supplier updated!",
    supplier,
  });
};

export default updateJobCandidateController;
