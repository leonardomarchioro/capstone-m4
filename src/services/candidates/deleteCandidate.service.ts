import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/candidates/candidate.entity";

const candidateDeleteService = async (jobId: string) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const deletedCandidate = candidateRepository.delete(jobId);
  return deletedCandidate;
};

export default candidateDeleteService;
