import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/Categories/categories.entity";

export const listAllCategoriesService = async () => {
  const userRepository = AppDataSource.getRepository(Category);

  const categories = await userRepository.find();

  return categories;
};

export default listAllCategoriesService;
