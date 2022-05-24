import { Request, Response } from "express";
import listAllCandidacyService from "src/services/candidates/listAllCandidacy.service";

const listAllCandidacyController = async (
  request: Request,
  response: Response
) => {
  const userId = request.userId;
  const candidacys = await listAllCandidacyService(userId);

  const candidacysLenght = candidacys.length;

  const formatCandidacys = candidacys.map(({ id, jobs }) => {
    return {
      id,
      Job: {
        id: jobs.id,
        title: jobs.title,
        description: jobs.description,
        deliveryDate: jobs.deliveryDate,
        cep: jobs.cep,
        category: jobs.categories.name,
        status: jobs.status,
      },
      Client: {
        id: jobs.users.id,
        name: jobs.users.name,
        email: jobs.users.email,
        phone: jobs.users.phone,
      },
    };
  });

  return response.status(200).json({
    candidacysQuantity: `you have ${candidacysLenght} applications for service(s)`,
    candidacys: formatCandidacys,
  });
};

export default listAllCandidacyController;
