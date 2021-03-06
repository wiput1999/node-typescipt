import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Post1584821170144 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'post',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'title',
            type: 'text'
          },
          {
            name: 'text',
            type: 'text'
          }
        ]
      }),
      true
    )
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts', true, true)
  }
}
