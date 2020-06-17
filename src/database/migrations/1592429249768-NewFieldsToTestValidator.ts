import { MigrationInterface, QueryRunner } from 'typeorm';

export default class NewFieldsToTestValidator1592429249768
  implements MigrationInterface {
  name = 'NewFieldsToTestValidator1592429249768';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
  }
}
