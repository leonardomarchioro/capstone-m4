import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";

const updateJobRemoveCandidateService = async ({ id }: { id: string }) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const job = await jobsRepository.findOne({
    where: {
      id: id,
    },
  });

  job.supplier = null;

  return jobsRepository.save(job);
};

export default updateJobRemoveCandidateService;
