import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1652975041219 implements MigrationInterface {
  name = "updateMigration1652975041219";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_426d378178da5713f1ab30daabc"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "REL_426d378178da5713f1ab30daab"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_426d378178da5713f1ab30daabc" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_426d378178da5713f1ab30daabc"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "REL_426d378178da5713f1ab30daab" UNIQUE ("jobId")`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_426d378178da5713f1ab30daabc" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
