import { AppDataSource } from "../../data-source";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IUpdate } from "../../interfaces/jobs";

const UpdateJobInfoService = async ({ id }: { id: string }, info: IUpdate) => {
  const jobsRepository = AppDataSource.getRepository(Job);

  const job = await jobsRepository.findOne({
    where: {
      id: id,
    },
  });

  info.title ? (job.title = info.title) : job.title;
  info.description ? (job.description = info.description) : job.description;
  info.category ? (job.category = info.category) : job.category;
  info.cep ? (job.cep = info.cep) : job.cep;
  info.deliveryDate ? (job.deliveryDate = info.deliveryDate) : job.deliveryDate;

  return await jobsRepository.save(job);
};

export default UpdateJobInfoService;
