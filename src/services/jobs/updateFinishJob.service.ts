import { prisma } from "../../prisma/client";

const updateFinishJobService = async ({ jobId }: { jobId: string }) => {
  const job = await prisma.job.update({
    where: {
      id: jobId,
    },
    data: {
      status: "finished",
    },
    select: {
      supplierTaken: {
        select: {
          users: { select: { name: true, id: true, email: true, phone: true } },
        },
      },
      categories: true,
      cep: true,
      deliveryDate: true,
      description: true,
      id: true,
      status: true,
      title: true,
      users: { select: { name: true, id: true, email: true, phone: true } },
    },
  });
  await prisma.candidate.delete({ where: { jobId: jobId } });

  return job;
};

export default updateFinishJobService;
