const { formatResults } = require('../../services')

const sql = `
WITH RECURSIVE from_parents AS
(
      SELECT id, name, '{}'::int[] as parents, 0 as level
      FROM categories
      WHERE parent_id IS NULL

   UNION ALL

      SELECT c.id, c.name, parents || c.parent_id, level+1
      FROM from_parents p
        JOIN categories c
        ON c.parent_id = p.id
      WHERE not c.id = any(parents)
)
SELECT name, id, parents, level
FROM from_parents
ORDER BY level, id;
`

const list = async (fastify, options) => {  
  const client = await fastify.pg.connect()
  
  fastify.get('/', async (req, res) => { 
    try {
      const {rows} = await client.query(sql)
      // TODO: this could be formatted in the database
      // formatted here, but not correctly
      const formatted = formatResults(rows)

      res.send(formatted) 
    } catch(err) { 
      throw new Error(err) 
    }
  }) 
}  

module.exports = list