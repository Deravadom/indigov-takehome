import type { Knex } from "knex"

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      user: "michaelneedleman",
      database: "indigovdb",
      port: 5432
    },
    migrations: { tableName: "migrations" }
  }
}

export default config