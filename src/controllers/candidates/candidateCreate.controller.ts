import { Request, Response } from "express";
import candidateCreateService from "../../services/candidates/createCandidacyJob.service";

const candidateCreateController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.body;
  const { userId } = request;

  const newCandidate = await candidateCreateService({ userId, jobId });

  return response.status(201).json(newCandidate);
};

export default candidateCreateController;
