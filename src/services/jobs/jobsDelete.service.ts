import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";

const jobDeleteService = async ({ id }: { id: string }) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  await jobsRepository.delete(id);

  return true;
};

export default jobDeleteService;
