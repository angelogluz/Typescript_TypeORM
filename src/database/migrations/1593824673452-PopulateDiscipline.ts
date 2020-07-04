import { MigrationInterface, QueryRunner } from 'typeorm';

export default class PopulateDiscipline1593824673452
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO discipline (name, duration) VALUES ('Engenharia de Software III', 60)",
    );
    await queryRunner.query(
      "INSERT INTO discipline (name, duration) VALUES ('Engenharia de Software II', 60)",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM discipline WHERE name = 'Engenharia de Software III'",
    );
    await queryRunner.query(
      "DELETE FROM discipline WHERE name = 'Engenharia de Software II'",
    );
  }
}
