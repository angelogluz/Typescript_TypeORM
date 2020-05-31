import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateClass1590893368742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO class (name, duration) VALUES ('Engenharia de Software III', 60)",
    );
    await queryRunner.query(
      "INSERT INTO class (name, duration) VALUES ('Engenharia de Software II', 60)",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM class WHERE name = 'Engenharia de Software III'",
    );
    await queryRunner.query(
      "DELETE FROM class WHERE name = 'Engenharia de Software II'",
    );
  }
}
