import { Request, Response } from "express";
import candidateCreateService from "../../services/candidates/createCandidate.service";

const candidateCreateController = async (
  request: Request,
  response: Response
) => {
  const { job_id } = request.body;
  const { userId } = request;

  const newCandidate = await candidateCreateService({ userId, job_id });

  return response.status(201).json(newCandidate);
};

export default candidateCreateController;
