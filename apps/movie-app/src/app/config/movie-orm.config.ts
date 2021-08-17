import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Movies } from '../models/Movies.entity'
import * as path from 'path'

export const MovieTypeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'movie-db',
    entities: [
        Movies
    ],
    synchronize: false,
    migrationsTableName: 'migration',

    migrations: ['./migration/*.ts'],

    cli: {
      migrationsDir: './migration',
    },
 
}