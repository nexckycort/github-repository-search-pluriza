import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './search-protocols'
import { ISearchService } from 'domain/services/interfaces/search'
import { Logger } from 'infrastructure/helpers/logger'
import { SearchDTO } from './search-interfaces'

export class SearchController implements Controller {
  constructor(private readonly searchService: ISearchService) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const searchDTO: SearchDTO = httpRequest.body
      const response = await this.searchService.searchByType(searchDTO)
      return ok({ message: `downloaded ${searchDTO.type}`, data: response })
    } catch (error) {
      Logger.error('SearchController', error)
      return serverError(error)
    }
  }
}
