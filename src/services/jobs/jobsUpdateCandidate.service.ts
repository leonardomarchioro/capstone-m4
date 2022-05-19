import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { User } from "../../entities/User/user.entity";

const updateJobCandidateService = async ({
  userId,
  id,
}: {
  userId: string;
  id: string;
}) => {
  const jobsRepository = AppDataSource.getRepository(Job);
  const userRepository = AppDataSource.getRepository(User);

  let jobPromise = jobsRepository.findOne({
    where: {
      id: id,
    },
  });

  const userPromise = userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const [ job, user ] = await Promise.all([jobPromise, userPromise])

  user ? (job.supplier = user) : job.supplier;

  return jobsRepository.save(job);
};

export default updateJobCandidateService;
