import supertest from 'supertest'

import server from '../../../../../src/app/config/app'
import { apiPrefixV1 } from '../../../../index'

jest.mock('../../../../../src/infrastructure/driven-adapters/redis-adapter/redis-helper', () => {
  return {
    RedisHelper: {
      delete: async (key: string) => true,
      find: async (key: string) => undefined,
      save: async (key: string, value: any) => value
    }
  }
})

describe('search', () => {
  const endpoint = [apiPrefixV1, 'search'].join('/')
  const request = supertest(server)

  it('It should send a success response when clearing the cache', (done) => {
    request.post(endpoint).send({
      type: 'users',
      q: 'nexckycort'
    })
      .then((response) => {
        expect(response.status).toBe(200)
        expect(response.body).toBeDefined()
        expect(response.body.message).toBeDefined()
        expect(response.body.statusCode).toBeDefined()
        expect(response.body.data).toBeDefined()
        done()
      })
  })
})
