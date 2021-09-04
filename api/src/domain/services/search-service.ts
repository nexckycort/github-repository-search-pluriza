import { NewSearch } from 'domain/models/search-model'
import { SearchRepository } from 'infrastructure/repositories/search-repository'
import { ISearchService } from './interfaces/search'

export class SearchService implements ISearchService {
  constructor(private readonly searchRepository: SearchRepository) {}

  searchByType = async (newSearch: NewSearch) => {
    return await this.searchRepository.searchByType(newSearch)
  }
}
