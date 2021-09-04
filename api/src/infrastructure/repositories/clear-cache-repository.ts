import { BaseRepository } from 'infrastructure/repositories/base/base-repository'

export class ClearCacheRepository extends BaseRepository<any> {
  cleanUp = async () => {
    await this.delete()
  }
}
