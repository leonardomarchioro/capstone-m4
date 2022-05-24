import { prisma } from "../../prisma/client";

import { ISupplier } from "../../interfaces/jobs";

const updateCandidateJobService = async ({ supplierId, jobId }: ISupplier) => {
  const job = await prisma.job.update({
    where: { id: jobId },
    data: { status: "doing" },
  });

  const supplierTaken = await prisma.supplierTaken.create({
    data: { userId: supplierId, jobId },
    select: {
      jobs: {
        select: {
          categories: true,
          cep: true,
          deliveryDate: true,
          description: true,
          id: true,
          reviews: true,
          status: true,
          title: true,
          users: { select: { name: true, id: true, email: true, phone: true } },
        },
      },
      users: true,
    },
  });

  return supplierTaken;
};

export default updateCandidateJobService;
