import knex from "knex"
import knexfile from "./knexfile"
const { attachToStreamCSV } = require('knex-to-csv')
attachToStreamCSV()

const db = knex(knexfile.development)
export default db;