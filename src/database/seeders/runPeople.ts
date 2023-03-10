import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { People } from "../../people/entities/people.entity";

import axios from 'axios';

export default class InitialDatabaseSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {



            let url = 'https://swapi.dev/api/people?page=1';
            let a = await axios.get(url);

            let data = a.data.results;

            for (let i = 0; i < data.length; i++) {
                let obj = {
                    name: data[i].name,
                    height: data[i].height,
                    mass: data[i].mass,
                    hair_color: data[i].hair_color,
                    eye_color: data[i].eye_color,
                    skin_color: data[i].skin_color,
                    birth_year: data[i].birth_year,
                    gender: data[i].gender,
                }

                await connection
                    .createQueryBuilder()
                    .insert()
                    .into(People)
                    .values(obj)
                    .execute();
            }


    }

}