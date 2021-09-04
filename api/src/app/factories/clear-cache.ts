import { ClearCacheService } from 'domain/services/clear-cache-service'
import { ClearCacheController } from 'infrastructure/entry-points/api/v1/clear-cache'
import { ClearCacheRepository } from 'infrastructure/repositories/clear-cache-repository'

export const makeClearCacheController = (): ClearCacheController => {
  const clearCacheRepository = new ClearCacheRepository()
  const clearCacheService = new ClearCacheService(clearCacheRepository)
  const clearCacheController = new ClearCacheController(clearCacheService)
  return clearCacheController
}
