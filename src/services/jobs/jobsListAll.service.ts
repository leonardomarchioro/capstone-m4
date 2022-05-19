import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { TypesJob } from "../../entities/TypesJob/typesJob.entity";

const listAllJobsService = async () => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const typesRepository = AppDataSource.getRepository(TypesJob);

  const type = await typesRepository.findOne({ where: { name: "available" } });

  const avaiableJobs = await jobsRepository.find({
    where: {
      type,
    },
  });

  return avaiableJobs;
};

export default listAllJobsService;
