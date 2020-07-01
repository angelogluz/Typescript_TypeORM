console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
console.log('process.env.DATABASE_URL :>> ', process.env.ENTITIES);
console.log('process.env.DATABASE_URL :>> ', process.env.MIGRATIONS);
module.exports = {

  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "logging": true,
  "entities": [
    process.env.ENTITIES
 ],
 "migrations": [
  process.env.MIGRATIONS
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models/"
  }
}
