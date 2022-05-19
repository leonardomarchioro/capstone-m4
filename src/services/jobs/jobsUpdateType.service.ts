import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";

const updateJobTypeCandidateService = async ({ id }: { id: string }) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const job = await jobsRepository.findOne({
    where: {
      id,
    },
  });

  job.type = "finished";

  return jobsRepository.save(job);
};

export default updateJobTypeCandidateService;
