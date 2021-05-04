const path = require('path')
const envPath = path.resolve(__dirname, '..', '..', '.env')
require('dotenv').config({ path: envPath })

const host = process.env.HOST || '0.0.0.0'

const port = process.env.PORT ?
  parseInt(process.env.PORT, 10) :
  3000

const dbUser = process.env.DBUSER
const dbPassword = process.env.DBPASSWORD
const dbDatabase = process.env.DBDATABASE
const dbHost = process.env.DBHOST
const dbPort = process.env.DBPORT

module.exports = {
  host,
  port,
  dbUser,
  dbPassword,
  dbDatabase,
  dbHost,
  dbPort
}
