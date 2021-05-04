const path = require('path')
const autoLoad = require('fastify-autoload')
const postgres = require('fastify-postgres')

const { host, port } = require('./config')
const { dbUser, dbPassword, dbDatabase, dbHost, dbPort } = require('./config')

const init = async (fastify, opts = {}) => {
  console.log('host', host)
  const cs = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbDatabase}`
  console.log('cs', cs)

  fastify.register(postgres, {
    connectionString: cs
  })

  fastify.register(autoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts }
  })

  fastify.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts}
  })
}

module.exports = init