const fastify = require('fastify')
const fp = require('fastify-plugin')
const init = require('../src/app')

const config = () => ({})

const build = () => {
  const app = fastify()
  app.register(fp(init), config())

  return app
}

const close = (app) => {
  app.close.bind(app)
}

module.exports = {
  config,
  build,
  close
}
