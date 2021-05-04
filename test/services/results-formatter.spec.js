const { formatResults } = require('../../src/services/results-formatter')

const rows = [
  {
    name: 'first',
    id: 1,
    parents: [],
    level: 0
  },
  {
    name: 'second',
    id: 2,
    parents: [],
    level: 0
  },
  {
    name: 'first-a',
    id: 3,
    parents: [ 1 ],
    level: 1
  },
  {
    name: 'second-a',
    id: 6,
    parents: [ 2 ],
    level: 1
  },
  {
    name: 'second-a',
    id: 5,
    parents: [ 1 ],
    level: 1
  },
  {
    name: 'first-b',
    id: 4,
    parents: [ 1, 3 ],
    level: 2
  }
]

describe('formatResults',  () => {
  it('correctly formats results to nested JSON', () => {
    const expected = [
      {
        id: 1,
        name: 'first',
        subcategories: [
          {
            id: 3,
            name: 'first-a',
            subcategories: [
              {
                id: 4,
                name: 'first-b',
                subcategories: []
              }
            ]
          },
          {
            id: 5,
            name: 'second-a',
            subcategories: []
          }
        ]
      },
      {
        id: 2,
        name: 'second',
        subcategories: [
          {
            id: 6,
            name: 'second-a',
            subcategories: []
          }
        ]
      }
    ]

    const result = formatResults(rows)

    expect(result).toStrictEqual(expected)
  })
})

