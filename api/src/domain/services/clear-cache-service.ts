import { ClearCacheRepository } from 'infrastructure/repositories/clear-cache-repository'
import { IClearCacheService } from './interfaces/clear-cache'

export class ClearCacheService implements IClearCacheService {
  constructor(private readonly clearCacheRepository: ClearCacheRepository) {}

  cleanUp = async () => {
    await this.clearCacheRepository.cleanUp()
  }
}
