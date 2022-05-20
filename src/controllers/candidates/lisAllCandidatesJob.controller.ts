import { Request, Response } from "express";
import listAllCandidatesJobService from "../../services/candidates/listAllCandidatesJob.service";

const listAllCandidatesJobController = async (
  request: Request,
  response: Response
) => {
  const { idJob } = request.params;
  const candidates = await listAllCandidatesJobService(idJob);

  const candidatesLenght = candidates.length;

  return response
    .status(200)
    .json({ candidatesQuantity: candidatesLenght, candidates });
};

export default listAllCandidatesJobController;
