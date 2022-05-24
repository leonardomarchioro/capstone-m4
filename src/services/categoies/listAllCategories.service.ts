import { prisma } from "../../prisma/client";

const listAllCategoriesService = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};

export default listAllCategoriesService;
