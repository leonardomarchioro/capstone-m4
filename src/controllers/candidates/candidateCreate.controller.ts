import { Request, Response } from "express";
import createCandidacyJobService from "src/services/candidates/createCandidacyJob.service";

const candidateCreateController = async (
  request: Request,
  response: Response
) => {
  const { jobId } = request.body;
  const { userId } = request;

  const newCandidate = await createCandidacyJobService({ userId, jobId });

  const Job = {
    id: newCandidate.jobs.id,
    title: newCandidate.jobs.title,
    description: newCandidate.jobs.description,
    deliveryDate: newCandidate.jobs.deliveryDate,
    cep: newCandidate.jobs.cep,
    category: newCandidate.jobs.categories.name,
  };

  return response.status(201).json({
    Candidate: newCandidate.users,
    Job,
    Client: newCandidate.jobs.users,
  });
};

export default candidateCreateController;
