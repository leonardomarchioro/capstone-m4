import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { TypesJob } from "../../entities/TypesJob/typesJob.entity";
import { IJobsCreate } from "../../interfaces/jobs";

const jobsCreateService = async (jobData: IJobsCreate) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const typesRepository = AppDataSource.getRepository(TypesJob);

  const defaultType = await typesRepository.findOne({
    where: { name: "available" },
  });

  jobData.type = defaultType;

  const newJob = jobsRepository.create(jobData);

  await jobsRepository.save(newJob);

  return newJob;
};

export default jobsCreateService;
