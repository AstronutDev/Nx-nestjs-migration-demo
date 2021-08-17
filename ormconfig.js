const path = require('path'); 
// const Movies = require('./apps/movie-app/src/app/models/movie.entity')

const baseConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'movie-db',
    entities: [
      path.resolve(
        __dirname,
      `${
        'apps'
      }/**/*.entity{.ts,.js}`,
    )
    ],

    migrationsTableName: 'migrations',
    migrations: [path.resolve(__dirname, 'migrations/**/*{.ts,.js}')],
    logger: 'advanced-console',
    logging: ['warn', 'error'],
    cli: {
      migrationsDir: 'migrations',
    },
    synchronize: false,
  };
  
  if (process.env.NODE_ENV !== 'test') {
    module.exports = {
      ...baseConfig,
    };
  } else {
    module.exports = {
      ...baseConfig,
      dropSchema: true,
      synchronize: true,
    };
  }


  console.log('xxxxxxxxx =>', baseConfig);
  