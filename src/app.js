const path = require('path')
const autoLoad = require('fastify-autoload')

const init = async (fastify, opts = {}) => {
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