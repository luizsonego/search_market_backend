module.exports = {
  type: 'sqlite',
  logging: ['query'],
  database: './src/database/database.sqlite',
  entities: [
    'dist/entity/**/*.js'
  ],
  migrations: [
    'dist/database/migration/**/*.js'
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration'
  }
}
