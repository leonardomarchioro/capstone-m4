import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IUserListOne } from "../../interfaces/user";

const listMeJobsService = async ({ userId }: IUserListOne) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const allJobs = await jobsRepository.find({
    where: {
      user: [{ id: userId }],
    },
  });

  return allJobs;
};

export default listMeJobsService;
