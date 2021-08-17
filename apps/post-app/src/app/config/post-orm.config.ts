import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const PostTypeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'post-db',
    entities: [

    ],
    synchronize: true
}