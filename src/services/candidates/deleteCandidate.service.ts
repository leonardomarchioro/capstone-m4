import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/candidates/candidate.entity";
import { ICandidateCreate } from "../../interfaces/candidate";
// request.userId

const candidateDeleteService = async ({ job_id }: ICandidateCreate) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const deletedCandidate = candidateRepository.delete(job_id);
  return deletedCandidate;
};

export default candidateDeleteService;
