import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './clear-cache-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { IClearCacheService } from 'domain/services/interfaces/clear-cache'

export class ClearCacheController implements Controller {
  constructor(private readonly clearCacheService: IClearCacheService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.clearCacheService.cleanUp()
      return ok({ message: 'Cleared backend caching' })
    } catch (error) {
      Logger.error('ClearCacheController', error)
      return serverError(error)
    }
  }
}
