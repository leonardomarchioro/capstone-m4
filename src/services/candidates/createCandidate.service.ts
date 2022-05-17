import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/candidates/candidate.entity";
import { ICandidateCreate } from "../../interfaces/candidate";
import { v4 as uuid } from "uuid";

const candidateCreateService = async ({
  user_id,
  job_id,
}: ICandidateCreate) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);
  const candidateData = {
    id: uuid(),
    user_id,
    job_id,
  };

  const newCandidate = candidateRepository.create(candidateData);
  await candidateRepository.save(newCandidate);

  return newCandidate;
};

export default candidateCreateService;
