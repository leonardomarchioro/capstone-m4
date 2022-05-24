import { prisma } from "../../prisma/client";

const listAllCandidacyService = async (userId: string) => {
  const candidacy = await prisma.candidate.findMany({
    where: { userId },
    select: {
      id: true,
      jobs: {
        select: {
          id: true,
          title: true,
          description: true,
          categories: { select: { name: true } },
          deliveryDate: true,
          status: true,
          cep: true,
          users: { select: { id: true, name: true, email: true, phone: true } },
        },
      },
    },
  });

  return candidacy;
};

export default listAllCandidacyService;
