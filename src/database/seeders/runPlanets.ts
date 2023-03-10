import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { Planets } from "../../planets/entities/planets.entity";

import axios from 'axios';

export default class InitialDatabaseSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {

        let url = 'https://swapi.dev/api/planets?page=1';
        let a = await axios.get(url);

        let data = a.data.results;

        for (let i = 0; i < data.length; i++) {
            let obj = {
                name: data[i].name,
                rotation_period: data[i].rotation_period,
                orbital_period: data[i].orbital_period,
            }

            await connection
                .createQueryBuilder()
                .insert()
                .into(Planets)
                .values(obj)
                .execute();
        }


    }

}