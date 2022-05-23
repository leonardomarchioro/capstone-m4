import { prisma } from "@PrismaClient";

const updateFinishJobService = async ({ id }: { id: string }) => {
  const job = await prisma.job.update({
    where: {
      id,
    },
    data: {
      status: "finished",
    },
  });
  await prisma.candidate.delete({ where: { jobId: id } });

  return job;
};

export default updateFinishJobService;
