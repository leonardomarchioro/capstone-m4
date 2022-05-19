import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";

const listJobsService = async ({ id }: { id: string }) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const especifiedJob = jobsRepository.findOne({
    where: {
      id: id,
    },
  });

  return especifiedJob;
};

export default listJobsService;
