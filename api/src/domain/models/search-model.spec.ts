import { SEARCH_TYPE } from './search-model'

describe('search model', () => {
  it('We can verify the search types', (done) => {
    expect(SEARCH_TYPE).toEqual(['users', 'repositories', 'issues'])
    done()
  })
})
