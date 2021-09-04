import { RequestInfo, RequestInit } from 'node-fetch'
import http from '.'

jest.mock('node-fetch', () => (url: RequestInfo, init?: RequestInit | undefined): Promise<any> => {
  return {
    status: 200,
    statusText: 'OK',
    json: async () => JSON.parse(JSON.stringify({}))
  } as any
})

describe('http', () => {
  const url = 'http://localhost/test'

  it('get', (done) => {
    http
      .get(url, { headers: {} })
      .then(() => done())
      .catch(console.error)
  })

  it('post', (done) => {
    http
      .post(url, {})
      .then(() => done())
      .catch(console.error)
  })

  it('put', (done) => {
    http
      .put(url, {})
      .then(() => done())
      .catch(console.error)
  })

  it('delete', (done) => {
    http
      .delete(url, {})
      .then(() => done())
      .catch(console.error)
  })
})
