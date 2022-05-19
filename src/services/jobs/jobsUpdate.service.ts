import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/Categories/categories.entity";
import { Job } from "../../entities/Jobs/jobs.entity";
import { IUpdateSend } from "../../interfaces/jobs";

const UpdateJobInfoService = async (
  id: string,
  { title, description, category, cep, deliveryDate }: IUpdateSend
) => {
  const jobsRepository = AppDataSource.getRepository(Job);
  const cetegoriesRepository = AppDataSource.getRepository(Category);

  const job = await jobsRepository.findOne({
    where: {
      id,
    },
  });

  const categoryData = await cetegoriesRepository.findOne({
    where: { name: category },
  });

  return await jobsRepository.save(job);
};

export default UpdateJobInfoService;
