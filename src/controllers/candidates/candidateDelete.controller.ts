import { Request, Response } from "express";
import candidateDeleteService from "../../services/candidates/deleteCandidate.service";

const candidateDeleteController = async (
  request: Request,
  response: Response
) => {
  const { idJob } = request.params;

  await candidateDeleteService(idJob);

  return response.status(200).json({ message: "Deleted candidacy" });
};

export default candidateDeleteController;
