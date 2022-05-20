import { prisma } from "@PrismaClient";
import { IUpdate } from "../../interfaces/jobs";

const UpdateJobInfoService = async (id: string, {
  cep,
  title,
  categoryId,
  description,
  deliveryDate,
}: IUpdate) => {

  const job = await prisma.job.update({
    where: {
      id,
    },
    data: {
      cep,
      title,
      categoryId,
      description,
      deliveryDate
    }
  });


  return job;
};

export default UpdateJobInfoService;
