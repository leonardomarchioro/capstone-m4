import { MigrationInterface, QueryRunner } from "typeorm";
//Migration Nova 13H
export class firstMigration1652889149332 implements MigrationInterface {
  name = "firstMigration1652889149332";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "IsSupplier" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "reviews" ("id" uuid NOT NULL, "score" integer NOT NULL, "comment" character varying, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "types_jobs" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2e52db9694fa5559ad26bea93fe" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "jobs" ("id" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "delivery_date" TIMESTAMP WITH TIME ZONE NOT NULL, "cep" character varying NOT NULL, "typeId" integer, "userId" uuid, "reviewId" uuid, "categoryId" integer, CONSTRAINT "REL_71c073215926fe3f1eae1ab450" UNIQUE ("reviewId"), CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "candidates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "jobId" uuid, CONSTRAINT "REL_426d378178da5713f1ab30daab" UNIQUE ("jobId"), CONSTRAINT "PK_140681296bf033ab1eb95288abb" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "supplier_taken" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "jobId" uuid, CONSTRAINT "REL_426d378178da5713f1ab30dafg" UNIQUE ("jobId"), CONSTRAINT "PK_140681296bf033ab1eb95288afg" PRIMARY KEY ("id"))`
    );

    await queryRunner.query(
      `ALTER TABLE "jobs" ADD CONSTRAINT "FK_7e562a0678e9e40476f32dc6487" FOREIGN KEY ("typeId") REFERENCES "types_jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" ADD CONSTRAINT "FK_79ae682707059d5f7655db4212a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" ADD CONSTRAINT "FK_71c073215926fe3f1eae1ab450f" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" ADD CONSTRAINT "FK_73a44bd20f3520849aafd304f69" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_10d0384a816526f8c7f6b1e67b3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_426d378178da5713f1ab30daabc" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "supplier_taken" ADD CONSTRAINT "FK_10d0384a816526f8c7f6b1e67f5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "supplier_taken" ADD CONSTRAINT "FK_426d378178da5713f1ab30daaf5" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "supplier_taken" DROP CONSTRAINT "FK_426d378178da5713f1ab30daaf5"`
    );
    await queryRunner.query(
      `ALTER TABLE "supplier_taken" DROP CONSTRAINT "FK_10d0384a816526f8c7f6b1e67f5"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_426d378178da5713f1ab30daabc"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_10d0384a816526f8c7f6b1e67b3"`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" DROP CONSTRAINT "FK_73a44bd20f3520849aafd304f69"`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" DROP CONSTRAINT "FK_71c073215926fe3f1eae1ab450f"`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" DROP CONSTRAINT "FK_79ae682707059d5f7655db4212a"`
    );
    await queryRunner.query(
      `ALTER TABLE "jobs" DROP CONSTRAINT "FK_7e562a0678e9e40476f32dc6487"`
    );
    await queryRunner.query(`DROP TABLE "supplier_taken"`);
    await queryRunner.query(`DROP TABLE "candidates"`);
    await queryRunner.query(`DROP TABLE "jobs"`);
    await queryRunner.query(`DROP TABLE "types_jobs"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "reviews"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
