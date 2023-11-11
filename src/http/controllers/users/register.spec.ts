import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, expect, describe, it } from 'vitest'

describe('Register (e2e)', async () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })
  it('should be able to create a new user', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '1234567',
    })

    expect(response.statusCode).toEqual(201)
  })
})
