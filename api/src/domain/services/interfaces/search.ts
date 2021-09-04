import { NewSearch, Search } from 'domain/models/search-model'
import { ResponseApiGithub } from 'infrastructure/repositories/search-repository'

export interface ISearchService {
  searchByType: (newSearch: NewSearch) => Promise<ResponseApiGithub<Search>>
}
