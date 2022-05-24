import { prisma } from "@PrismaClient";

const listAllCategoriesService = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};

export default listAllCategoriesService;
