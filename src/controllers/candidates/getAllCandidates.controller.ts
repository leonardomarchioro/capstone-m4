import { Request, Response } from "express";
import getAllCandidatesService from "../../services/candidates/getAllCandidates.service";

const getAllCandidatesController = async (
  request: Request,
  response: Response
) => {
  const candidates = await getAllCandidatesService();

  const candidatesLenght = candidates.length

  return response.status(200).json({candidatesQuantity: candidatesLenght, candidates});
};

export default getAllCandidatesController;
