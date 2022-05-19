import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IUserListOne } from "../../interface/user";

const listMeJobsService = async ({ userId }: IUserListOne) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const allJobs = await jobsRepository.find({
    where: {
      id: userId,
    },
  });

  return allJobs;
};

export default listMeJobsService;
