import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/Categories/categories.entity";
import { Job } from "../../entities/Jobs/jobs.entity";
import { TypesJob } from "../../entities/TypesJob/typesJob.entity";
import { User } from "../../entities/User/user.entity";
import { IJobsCreate, IJobsCreateSend } from "../../interfaces/jobs";

const jobsCreateService = async (jobData: IJobsCreateSend) => {
  const jobsRepository = AppDataSource.getRepository(Job);
  const cetegoriesRepository = AppDataSource.getRepository(Category);
  const typesRepository = AppDataSource.getRepository(TypesJob);
  const userRepository = AppDataSource.getRepository(User);

  const category = await cetegoriesRepository.findOne({
    where: { name: jobData.category },
  });

  const defaultType = await typesRepository.findOne({
    where: { name: "available" },
  });

  const user = await userRepository.findOne({ where: { id: jobData.userId } });

  const job: IJobsCreate = {
    category,
    cep: jobData.cep,
    deliveryDate: jobData.deliveryDate,
    description: jobData.description,
    title: jobData.title,
    type: defaultType,
    userId: user,
  };

  const newJob = jobsRepository.create(job);

  await jobsRepository.save(newJob);

  return newJob;
};

export default jobsCreateService;
