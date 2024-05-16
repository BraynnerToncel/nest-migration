import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserAddImage1715895674451 implements MigrationInterface {
  name = 'UserAddImage1715895674451';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "image" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "image"`);
  }
}
