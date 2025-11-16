import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEventsTable1733289990000 implements MigrationInterface {
    name = 'CreateEventsTable1733289990000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("Index" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "Date" varchar NOT NULL, "location" varchar NOT NULL, "typeActivity" varchar NOT NULL, "categoryoption" varchar NOT NULL, "eventSeverity" varchar NOT NULL, "typeUnitActivity" varchar NOT NULL, "weather" varchar NOT NULL, "eventDescription" varchar NOT NULL, "subSubUnitInput" varchar NOT NULL, "results" varchar NOT NULL, "injuryLevel" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
