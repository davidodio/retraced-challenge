const addCategory = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      parent_id: {
        type: 'integer'
      }
    },
    required: ['name']
  }
}

const post = async (fastify, options) => {  
  const client = await fastify.pg.connect()
  
  fastify.post('/', { schema: addCategory }, async (req, res) => { 
    try {
      const { name, parent_id } = request.body      
      const sql = {
        text: `INSERT INTO categories (name, parent_id)
                VALUES($1, $2 ) RETURNING *`,
        values: [ name, parent_id ]
      }

      const {rows} = await client.query(sql)
      const id = rows[0].id

      res.reply(201)
      res.send({
        id,
        name,
        parent_id
      }) 
    } catch(err) { 
      throw new Error(err) 
    }
  }) 
}  

module.exports = post