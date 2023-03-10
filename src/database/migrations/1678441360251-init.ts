import {MigrationInterface, QueryRunner} from "typeorm";

export class init1678441360251 implements MigrationInterface {
    name = 'init1678441360251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`planets\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`rotation_period\` int NOT NULL, \`orbital_period\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`height\` int NOT NULL, \`mass\` int NOT NULL, \`hair_color\` varchar(255) NOT NULL, \`skin_color\` varchar(255) NOT NULL, \`eye_color\` varchar(255) NOT NULL, \`birth_year\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`planetId\` int NULL, UNIQUE INDEX \`REL_1c7854e5ab8eb6ff67752a78a4\` (\`planetId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`people\` ADD CONSTRAINT \`FK_1c7854e5ab8eb6ff67752a78a45\` FOREIGN KEY (\`planetId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`people\` DROP FOREIGN KEY \`FK_1c7854e5ab8eb6ff67752a78a45\``);
        await queryRunner.query(`DROP INDEX \`REL_1c7854e5ab8eb6ff67752a78a4\` ON \`people\``);
        await queryRunner.query(`DROP TABLE \`people\``);
        await queryRunner.query(`DROP TABLE \`planets\``);
    }

}
