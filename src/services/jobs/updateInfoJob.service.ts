import { prisma } from "@PrismaClient";
import { IUpdate } from "../../interfaces/jobs";

const UpdateInfosJobService = async (
  id: string,
  { cep, title, categoryId, description, deliveryDate }: IUpdate
) => {
  const job = await prisma.job.update({
    where: {
      id,
    },
    data: {
      cep,
      title,
      categoryId,
      description,
      deliveryDate,
    },
    select: {
      id: true,
      title: true,
      description: true,
      categories: { select: { name: true } },
      deliveryDate: true,
      cep: true,
    },
  });

  return job;
};

export default UpdateInfosJobService;
