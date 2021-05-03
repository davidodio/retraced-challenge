const fastify = require('fastify')
const app = require('./app')
const { host, port } = require('./config')

const options = {
  logger: {
    level: 'info',
    prettyPrint: true
  }
}

const start = async() => {
  const server = fastify(options)   
  await app(server, options)

  server.listen(port, host, (err, address) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }

    console.log(`app listening on ${address}`)
  })  
}

start()