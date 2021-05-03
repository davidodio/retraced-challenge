const { build, close } = require('../route-helper')

let app = null

beforeAll(() => {
  app = build()
})

afterAll(() => {
  close(app)
})

describe('root route', () => {
  it('returns the api name correctly', async() => {
    const route = {
      url: '/'
    }

    const result = await app.inject(route)
    const body = JSON.parse(result.payload)
    expect(body.name).toBe('retraced-challenge')
    expect(body.version).not.toBeFalsy()
  })
})