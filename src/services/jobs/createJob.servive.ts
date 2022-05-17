import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IJobsCreate } from "../../interface/jobs";

const jobsCreateService = async ({
  title,
  description,
  deliveryDate,
  cep,

  client,
  category,
}: IJobsCreate) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const service = {
    title,
    description,
    deliveryDate,
    cep,
    client,
    category,
  };

  jobsRepository.create(service);
  await jobsRepository.save(service);

  return service;
};

export default jobsCreateService;
