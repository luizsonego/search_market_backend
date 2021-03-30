import { Table } from 'typeorm';
export class createTableImages1608244550364 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'market_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImagesMarket',
                    columnNames: ['market_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'market',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('images');
    }
}
//# sourceMappingURL=1608244550364-create_table_images.js.map