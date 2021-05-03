
const echo = async(fastify, opts) => {
  fastify.get('/', async(req, res) => {
    const { who } = req.query

    return {
      "hello": who || 'World'
    }
  })
}

module.exports = echo