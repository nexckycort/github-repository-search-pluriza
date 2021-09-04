import { Write } from 'infrastructure/repositories/base/interfaces/write'
import { Read } from 'infrastructure/repositories/base/interfaces/read'
import { RedisHelper } from 'infrastructure/driven-adapters/redis-adapter/redis-helper'
import httpRequest from 'infrastructure/lib/http'
import { redisConnection } from 'app/config/environment'

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  constructor(readonly http = httpRequest, readonly redis = RedisHelper) { }

  async create (key: string, item: T): Promise<T> {
    if (!redisConnection.enableRedis) return item
    return await this.redis.save(key, item)
  }

  async delete (key?: string): Promise<boolean> {
    if (!redisConnection.enableRedis) return true
    return await this.redis.delete(key)
  }

  async findOne (key: string): Promise<T> {
    if (!redisConnection.enableRedis) return undefined as unknown as T
    return await this.redis.find<T>(key)
  }
}
