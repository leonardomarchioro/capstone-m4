import { AppDataSource } from "../../data-source";
import { Candidate } from "../../entities/Candidates/candidate.entity";
import { ICandidateCreate } from "../../interfaces/candidate";
import { v4 as uuid } from "uuid";
import { User } from "../../entities/User/user.entity";
import { Job } from "../../entities/Jobs/jobs.entity";

const candidateCreateService = async ({ userId, jobId }: ICandidateCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const jobRepository = AppDataSource.getRepository(Job);
  const candidateRepository = AppDataSource.getRepository(Candidate);

  const jobPromisse = jobRepository.findOne({
    where: {
      id: jobId,
    },
  });

  const userPromisse = userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const [job, user] = await Promise.all([jobPromisse, userPromisse]);

  const newCandidate = candidateRepository.create({
    job,
    user,
  });

  await candidateRepository.save(newCandidate);

  return newCandidate;
};

export default candidateCreateService;
