import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateInstitution1593132405719
  implements MigrationInterface {
  name = 'CreateInstitution1593132405719';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "college" ("graduations" character varying NOT NULL, "year" integer NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea02cccb5b3a75968ef94483fcf" PRIMARY KEY ("identificationId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "university" ("graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6c034b996fecea5836da42dc44" PRIMARY KEY ("identificationId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD "created_At" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "updated_At"`);
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "created_At"`);
    await queryRunner.query(`DROP TABLE "university"`);
    await queryRunner.query(`DROP TABLE "college"`);
  }
}
