import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IJobsCreate } from "../../interfaces/jobs";

const jobsCreateService = async (jobData: IJobsCreate) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const newJob = jobsRepository.create(jobData);

  await jobsRepository.save(newJob);

  return newJob;
};

export default jobsCreateService;
