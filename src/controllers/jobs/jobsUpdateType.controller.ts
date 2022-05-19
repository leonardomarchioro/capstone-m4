import { Request, Response } from "express";
import updateJobTypeCandidateService from "../../services/jobs/jobsUpdateType.service";

const updateJobTypeCandidateController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const supplier = await updateJobTypeCandidateService(id);

  return response.status(200).json({
    message: "Type updated!",
    supplier,
  });
};

export default updateJobTypeCandidateController;
