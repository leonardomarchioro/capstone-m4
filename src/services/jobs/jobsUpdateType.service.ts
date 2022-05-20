import { prisma } from "@PrismaClient";

const updateJobTypeCandidateService = async ({ id }: { id: string }) => {

  const job = await prisma.job.update({
    where: {
      id,
    },
    data: {
      status: "finished"
    }
  });

  return job;
};

export default updateJobTypeCandidateService;
