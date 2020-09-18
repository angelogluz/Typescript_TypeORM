
module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": +process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "migrations": [process.env.MIGRATIONS],
    "entities": [process.env.ENTITIES],
    "synchronize": process.env.DB_SYNC == "true",
    "cli":{
      "migrationsDir": [
      "src/database/migrations/"
    ],
    "entitiesDir": "src/models/"
    },
 }
