import { Request, Response } from "express";
import listAllCandidacyService from "src/services/candidates/listAllCandidacy.service";

const listAllCandidacyController = async (
  request: Request,
  response: Response
) => {
  const userId = request.userId;
  const candidacys = await listAllCandidacyService(userId);

  const candidacysLenght = candidacys.length;

  return response.status(200).json({
    candidacysQuantity: `you have ${candidacysLenght} applications for service(s)`,
    candidacys,
  });
};

export default listAllCandidacyController;
