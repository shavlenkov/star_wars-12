import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import {PeopleModule} from "./people/people.module";


export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    PeopleModule
    // or
    // DatabaseOrmModule(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
