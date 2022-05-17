import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IJobsCreate } from "../../interface/jobs";

const listJobsService = async ({ id }: { id: string }) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const especifiedUser = jobsRepository.findOne({
    where: {
      id: id,
    },
  });

  return especifiedUser;
};

export default listJobsService;
