import { prisma } from "@PrismaClient";
import AppError from "src/errors/appError";

const deleteJobService = async ({ id }: { id: string }) => {
  const jobToDelete = await prisma.job.findUnique({
    where: {
      id,
    },
  });

  if (jobToDelete == null) {
    throw new AppError(404, "Job not exists!");
  }
  // erro esta sendo apontado para await prisma.job.delete(
  // Foreign key constraint failed on the field: `candidates_job_id_fkey (index)`
  await prisma.job.delete({
    where: {
      id,
    },
  });

  return true;
};

export default deleteJobService;
