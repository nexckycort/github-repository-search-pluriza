import { Ok, defaultAnswerOk } from '../interfaces/api-response'
import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../interfaces/http'

export const ok = ({ message = 'Ok', statusCode = '2000', data }: Ok = defaultAnswerOk): HttpResponse => ({
  statusCode: 200,
  body: {
    message,
    statusCode,
    data
  }
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (error: Error | unknown): HttpResponse => ({
  statusCode: 500,
  body: new ServerError((error as Error).stack as string)
})
