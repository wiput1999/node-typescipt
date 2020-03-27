import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm'

export class Comment1585340721626 implements MigrationInterface {
  name = 'Comment1585340721626'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comment',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment'
          },
          {
            name: 'postId',
            type: 'int'
          },
          {
            name: 'title',
            type: 'text'
          },
          {
            name: 'content',
            type: 'text'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'comment',
      new TableForeignKey({
        name: 'comment_post',
        columnNames: ['postId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'post'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comment', true, true)
  }
}
