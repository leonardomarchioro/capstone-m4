import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidates/candidate.entity";
import { Job } from "../../entities/Jobs/jobs.entity";

const getAllCandidatesService = async (jobId: string) => {
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const jobRepository = AppDataSource.getRepository(Job);

  const job = await jobRepository.findOne({
    where: {
      id: jobId,
    },
  });

  const candidates = await candidateRepository.find({
    where: {
      job
    },
  });

  return candidates;
};

export default getAllCandidatesService;