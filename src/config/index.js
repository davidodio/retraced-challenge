require('dotenv')

const host = process.env.HOST || '0.0.0.0'

const port = process.env.port ?
  parseInt(process.env.PORT, 10) :
  3000

module.exports = {
  host,
  port
}
