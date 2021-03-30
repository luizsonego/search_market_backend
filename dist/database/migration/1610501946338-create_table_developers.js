import { Table } from 'typeorm';
export class createTableDevelopers1610501946338 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'developers',
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
                    name: 'gender',
                    type: 'char'
                },
                {
                    name: 'age',
                    type: 'integer'
                },
                {
                    name: 'hobby',
                    type: 'varchar'
                },
                {
                    name: 'birth',
                    type: 'date'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('developers');
    }
}
//# sourceMappingURL=1610501946338-create_table_developers.js.map