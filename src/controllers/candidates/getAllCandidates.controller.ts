import { Request, Response } from "express";
import getAllCandidatesService from "../../services/candidates/getAllCandidates.service";

const getAllCandidatesController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.params;
  const candidates = await getAllCandidatesService(jobId);

  const candidatesLenght = candidates.length;

  return response
    .status(200)
    .json({ candidatesQuantity: candidatesLenght, candidates });
};

export default getAllCandidatesController;
