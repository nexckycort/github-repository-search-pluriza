import { ClearCacheService } from './clear-cache-service'

const clearCacheRepositoryMock: any = {
  cleanUp: async () => {}
}

let clearCacheService!: ClearCacheService
describe('ClearCacheService', () => {
  beforeEach(() => {
    clearCacheService = new ClearCacheService(clearCacheRepositoryMock)
  })

  it('We can verify that the cleanUp method was called', (done) => {
    clearCacheService.cleanUp().then(() => {
      done()
    })
  })
})
