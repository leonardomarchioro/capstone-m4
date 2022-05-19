import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidates/candidate.entity";

const getAllCandidatesService = async (jobId: string) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const candidates = await candidateRepository.find({
    where: {
      job: [{
        id: jobId
      }]
    },
  });

  return candidates;
};

export default getAllCandidatesService;
