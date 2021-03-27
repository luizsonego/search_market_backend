import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableImages1608244550364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "market_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "ImagesMarket",
            columnNames: ["market_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "market",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
