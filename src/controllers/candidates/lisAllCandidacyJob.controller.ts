import { Request, Response } from "express";
import getAllCandidatesService from "../../services/candidates/getAllCandidates.service";

const listAllCandidacyJobController = async (
  request: Request,
  response: Response
) => {
  const { idJob } = request.params;
  const candidates = await getAllCandidatesService(idJob);

  const candidatesLenght = candidates.length;

  const formatcandidates = candidates.map(({ id, users }) => {
    return {
      id,
      Supplier: {
        id: users.id,
        name: users.name,
        emai: users.email,
        phone: users.phone,
      },
    };
  });

  return response
    .status(200)
    .json({
      candidatesQuantity: candidatesLenght,
      Candidates: formatcandidates,
    });
};

export default listAllCandidacyJobController;
