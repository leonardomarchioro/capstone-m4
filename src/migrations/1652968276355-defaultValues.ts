import { MigrationInterface, QueryRunner } from "typeorm"

export class defaultValues1652968276355 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO types_jobs("name")
            VALUES
                ('available'),
                ('doing'),
                ('finished');
        `)
        await queryRunner.query(`
        INSERT INTO categories("name")
        VALUES
            ('medicina'),
            ('mecanica'),
            ('pediatria'),
            ('farmaceutica');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM types_jobs;
        `)
        await queryRunner.query(`
            DELETE FROM categories;
        `)
    }

}
