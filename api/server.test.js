// Write your tests here
const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')
// const { truncate } = require('../data/dbConfig')
// beforeEach(async () => {
//   await db('users').truncate()
// })

describe('server.js', () => {
  describe('GET request', () => {
    it('should not work since not logged in', async () => {
      const res = await request(server).get('/api/jokes')
      expect(res.status).toBe(401)
      expect(res.type).toBe('application/json')
    })
  })
})

describe('REGISTER AND LOGIN', () => {
  it('works', async () => {
    const res = await request(server)
    .post('/api/auth/register')
    .send({ username: 'leon', password: 'leon' })
    expect(res.status).toBe(201)
  })
  it('does not work with invalid user', async() => {
    const res = await request(server)
    .post('/api/auth/register')
    .send({ zzname: 'levi' })
    expect(res.status).toBe(500)
  })
  describe('LOGIN', () => {
    it('works', async () => {
      const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'leon', password: 'leon' })
      expect(res.status).toBe(200)
    })
    it('should not work with invalid user', async () => {
      const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'unknown', password: 'unknown' })
      expect(res.status).toBe(401)
    })
  })
})


