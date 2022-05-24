import { prisma } from "@PrismaClient";
import AppError from "src/errors/appError";

const updateRemoveCandidateJobService = async (id: string) => {
  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  });
  if (!job) {
    throw new AppError(404, "Job not exists!");
  }

  const suplierTakenObject = await prisma.supplierTaken.findUnique({
    where: { jobId: id },
  });

  await prisma.job.update({
    where: { id },
    data: { status: "available" },
  });

  if (suplierTakenObject != null) {
    await prisma.supplierTaken.delete({ where: { jobId: id } });
  }

  return true;
};

export default updateRemoveCandidateJobService;
