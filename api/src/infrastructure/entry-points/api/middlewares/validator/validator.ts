import { ObjectSchema } from 'infrastructure/lib/validator'

import { InvalidParamError } from '../../errors'
import { badRequest, ok } from '../../helpers/api-response'
import { HttpRequest, HttpResponse } from '../../interfaces'

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  QUERY = 'query',
  PARAM = 'params'
}

export default (schema: ObjectSchema, source: ValidationSource = ValidationSource.BODY) => {
  return {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
      const { error } = schema.validate(httpRequest[source])

      if (error === undefined) return ok()

      const { details } = error
      const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',')

      return badRequest(new InvalidParamError(message))
    }
  }
}
