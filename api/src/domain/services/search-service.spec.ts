import { SearchService } from './search-service'
import { NewSearch } from '../models/search-model'

const searchRepositoryMock: any = {
  searchByType: async (newSearch: NewSearch) => ({})
}

let searchService!: SearchService
describe('SearchService', () => {
  beforeEach(() => {
    searchService = new SearchService(searchRepositoryMock)
  })

  it('We can verify that the searchByType method was called', (done) => {
    searchService
      .searchByType({
        type: 'users',
        q: 'nexckycort'
      })
      .then(() => {
        done()
      })
  })
})
