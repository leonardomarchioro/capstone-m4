import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidates/candidate.entity";

const getAllCandidatesService = async (job_id: string) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const candidates = candidateRepository.find({
    where: {
      id: job_id,
    },
  });

  return candidates;
};

export default getAllCandidatesService;
