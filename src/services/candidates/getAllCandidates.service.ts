import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidates/candidate.entity";

const getAllCandidatesService = async () => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const candidates = candidateRepository.find();

  return candidates;
};

export default getAllCandidatesService;
