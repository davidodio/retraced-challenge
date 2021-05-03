const { name, version } = require('../../package.json')

const init = async(fastify) => {
  fastify.get('/', async function (request, reply) {
    return { 
      name,
      version
    }
  })
}

module.exports = init