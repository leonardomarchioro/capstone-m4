import { prisma } from "../../src/prisma/client";

export async function clearDatabase() {
  return await prisma.$executeRaw`
    TRUNCATE 
      candidates,
      jobs,
      users,
      supplier_taken,
      reviews;
  `;
}
