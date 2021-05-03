const { build, close } = require('../../route-helper')

let app = null

beforeAll(() => {
  app = build()
})

afterAll(() => {
  close(app)
})

describe('echo', () => {
  it('returns `who` when querystring set', async() => {
    const app = build();

    const route = {
      method: 'GET',
      url: '/echo?who=me'
    }

    const result = await app.inject(route)
    expect(result.statusCode).toBe(200);
    
    const body = JSON.parse(result.payload)
    expect(body).toStrictEqual({ hello: 'me' })
  })  

  it('returns `World` when querystring empty', async() => {
    const app = build();

    const route = {
      method: 'GET',
      url: '/echo'
    }

    const result = await app.inject(route)
    expect(result.statusCode).toBe(200);
    
    const body = JSON.parse(result.payload)
    expect(body).toStrictEqual({ hello: 'World' })
  })  
})