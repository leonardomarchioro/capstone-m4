import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";

const listAllJobsService = async () => {
  const jobsRepository = AppDataSource.getMongoRepository(Job);

  const avaiableJobs = await jobsRepository.find({
    where: {
      type: "avaiable",
    },
  });

  return avaiableJobs;
};

export default listAllJobsService;
