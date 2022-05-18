import { Request, Response } from "express";
import candidateDeleteService from "../../services/candidates/deleteCandidate.service";

const candidateDeleteController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.params;

  await candidateDeleteService(jobId);

  return response.status(200).json({ message: "Deleted candidacy" });
};

export default candidateDeleteController;
