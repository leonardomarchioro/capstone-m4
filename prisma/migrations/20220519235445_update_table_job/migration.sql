/*
  Warnings:

  - You are about to drop the column `type_id` on the `jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "type_id",
ADD COLUMN     "status" "jobStatus" DEFAULT E'available';
