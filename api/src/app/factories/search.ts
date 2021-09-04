import { SearchController } from 'infrastructure/entry-points/api/v1/search'
import { SearchRepository } from 'infrastructure/repositories/search-repository'
import { SearchService } from 'domain/services/search-service'

export const makeSearchController = (): SearchController => {
  const searchRepository = new SearchRepository()
  const searchService = new SearchService(searchRepository)
  const searchController = new SearchController(searchService)
  return searchController
}
