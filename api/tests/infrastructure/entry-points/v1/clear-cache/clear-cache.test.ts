import supertest from 'supertest'

import server from '../../../../../src/app/config/app'
import { apiPrefixV1 } from '../../../../index'

jest.mock('../../../../../src/infrastructure/driven-adapters/redis-adapter/redis-helper', () => {
  return {
    RedisHelper: {
      delete: async (key: string) => true
    }
  }
})

describe('clear cache', () => {
  const endpoint = [apiPrefixV1, 'clear-cache'].join('/')
  const request = supertest(server)

  it('It should send a success response when clearing the cache', (done) => {
    request.delete(endpoint).then((response) => {
      expect(response.status).toBe(200)
      expect(response.body).toBeDefined()
      expect(response.body.message).toBeDefined()
      expect(response.body.statusCode).toBeDefined()
      done()
    })
  })
})
