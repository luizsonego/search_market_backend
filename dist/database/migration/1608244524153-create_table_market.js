import { Table } from 'typeorm';
export class createTableMarket1608244524153 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'market',
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
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'text'
                },
                { name: 'sunday', type: 'text' },
                { name: 'sunStart', type: 'text' },
                { name: 'sunEnd', type: 'text' },
                { name: 'monday', type: 'text' },
                { name: 'monStart', type: 'text' },
                { name: 'monEnd', type: 'text' },
                { name: 'tuesday', type: 'text' },
                { name: 'tueStart', type: 'text' },
                { name: 'tueEnd', type: 'text' },
                { name: 'wednesday', type: 'text' },
                { name: 'wedStart', type: 'text' },
                { name: 'wedEnd', type: 'text' },
                { name: 'thursday', type: 'text' },
                { name: 'thuStart', type: 'text' },
                { name: 'thuEnd', type: 'text' },
                { name: 'friday', type: 'text' },
                { name: 'friStart', type: 'text' },
                { name: 'friEnd', type: 'text' },
                { name: 'saturday', type: 'text' },
                { name: 'satStart', type: 'text' },
                { name: 'satEnd', type: 'text' }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('market');
    }
}
//# sourceMappingURL=1608244524153-create_table_market.js.map