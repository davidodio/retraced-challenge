const formatResults = (items) => 
  items.reduce((agg, item) => {
    const parentId = item.parents.length > 0 ? item.parents.slice(-1)[0] : null
    const idx = agg.findIndex(x => x.id === parentId)
    if(idx > -1) {
      const existing = agg[idx]
      const withSubs = { 
        ...existing, 
        subcategories: [ 
          ...existing.subcategories, 
          { 
            id: item.id, 
            name: item.name, 
            subcategories: [] 
          } 
        ] 
      }
      const pre = agg.slice(0, idx)
      const post = agg.length > idx + 1 ? agg.slice(idx + 1) : []
      return [ ...pre, withSubs, ...post ] 
    } else {
      return [ ...agg, { id: item.id, name: item.name, subcategories: [] } ]
    }
  }, [])  

module.exports = {
  formatResults
}