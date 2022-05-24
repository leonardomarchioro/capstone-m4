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
  console.log(" ========", suplierTakenObject);

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

// user id LEO - d521065b-55d8-489d-a619-09b852ef19a9
// jobId LEO - fd8ce08c-b22c-471a-9e99-90ddc9142c83

// user id BIEL - 91347112-9493-4a46-85b6-ace077a41ec0
// jobID BIEL - cfdec711-0253-42c6-9722-465d54948532
