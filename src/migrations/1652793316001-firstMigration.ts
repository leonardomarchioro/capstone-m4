import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1652793316001 implements MigrationInterface {
    name = 'firstMigration1652793316001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'client', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" uuid NOT NULL, "score" integer NOT NULL, "comment" character varying, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job" ("id" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "delivery_date" TIMESTAMP WITH TIME ZONE NOT NULL, "cep" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'available', "clientId" uuid, "supplierId" uuid, "reviewId" uuid, "categoryId" integer, CONSTRAINT "REL_8ba9fda4ec64c33c53774934f0" UNIQUE ("reviewId"), CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "candidates" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "jobId" uuid, CONSTRAINT "REL_426d378178da5713f1ab30daab" UNIQUE ("jobId"), CONSTRAINT "PK_140681296bf033ab1eb95288abb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_e00beba94f55e2e444ccd678c6a" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_b34928f4a17baef8d8684f941c4" FOREIGN KEY ("supplierId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_8ba9fda4ec64c33c53774934f08" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_ab0702755e36375136d7b54207f" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_10d0384a816526f8c7f6b1e67b3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_426d378178da5713f1ab30daabc" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_426d378178da5713f1ab30daabc"`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_10d0384a816526f8c7f6b1e67b3"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_ab0702755e36375136d7b54207f"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_8ba9fda4ec64c33c53774934f08"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_b34928f4a17baef8d8684f941c4"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_e00beba94f55e2e444ccd678c6a"`);
        await queryRunner.query(`DROP TABLE "candidates"`);
        await queryRunner.query(`DROP TABLE "job"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
