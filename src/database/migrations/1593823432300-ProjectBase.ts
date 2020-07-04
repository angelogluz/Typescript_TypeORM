import { MigrationInterface, QueryRunner } from 'typeorm';

export default class ProjectBase1593823432300 implements MigrationInterface {
  name = 'ProjectBase1593823432300';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "college" ("graduations" character varying NOT NULL, "year" integer NOT NULL, "toDeleteColumn" integer NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea02cccb5b3a75968ef94483fcf" PRIMARY KEY ("identificationId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "discipline" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("name"), CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "disciplineId" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "linkContent" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "email" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "university" ("graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6c034b996fecea5836da42dc44" PRIMARY KEY ("identificationId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "student_discipline_discipline" ("studentId" uuid NOT NULL, "disciplineId" uuid NOT NULL, CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("studentId", "disciplineId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ccb4ae4609bfbf4d022560a3f8" ON "student_discipline_discipline" ("studentId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9a616bdfff1c46bddeb8ad78db" ON "student_discipline_discipline" ("disciplineId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "student_discipline_discipline" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "student_discipline_discipline" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("disciplineId") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student_discipline_discipline" DROP CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student_discipline_discipline" DROP CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_2652456e912c983cde73d3281db"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_9a616bdfff1c46bddeb8ad78db"`);
    await queryRunner.query(`DROP INDEX "IDX_ccb4ae4609bfbf4d022560a3f8"`);
    await queryRunner.query(`DROP TABLE "student_discipline_discipline"`);
    await queryRunner.query(`DROP TABLE "university"`);
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "content"`);
    await queryRunner.query(`DROP TABLE "lesson"`);
    await queryRunner.query(`DROP TABLE "discipline"`);
    await queryRunner.query(`DROP TABLE "college"`);
  }
}
