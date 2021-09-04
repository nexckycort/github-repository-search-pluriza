import { NextFunction, Request } from 'express'

import { switchEndpoint } from './switch-endpoint'
import { api } from '../config/environment'

const response: any = {
  sendFile (_path: string): any {
    return this
  }
}

const requestApi = {
  path: api.prefixV1
} as Request

const requestHtml = {
  path: '/'
} as Request

const nextFunction = () => ({} as NextFunction)

describe('switchEndpoint', () => {
  it('Should move on to the following middleware', (done) => {
    switchEndpoint(requestApi, response, nextFunction)
    done()
  })

  it('Should render html', (done) => {
    switchEndpoint(requestHtml, response, nextFunction)
    done()
  })
})
