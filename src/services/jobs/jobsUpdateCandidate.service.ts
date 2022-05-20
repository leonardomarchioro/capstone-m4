import { prisma } from "@PrismaClient";


const updateJobCandidateService = async ({
  userId,
  id,
}: {
  userId: string;
  id: string;
}) => {

  const job = await prisma.job.update({
    where: {
      id
    },
    data: {
      userId
    }
  });

  return job;
};

export default updateJobCandidateService;
