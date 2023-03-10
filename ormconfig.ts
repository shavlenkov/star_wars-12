
export default {
    type: 'mysql',
    host: '100.25.130.243',
    port: 6033,
    username: 'root',
    password: 'my_secret_password',
    database: 'app_db',
    entities: ['src/**/entities/*.entity{.ts,.js}'],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',

    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    migrations: ['src/database/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/database/migrations',
    },

    seeds: ['src/database/seeders/*.ts']
}