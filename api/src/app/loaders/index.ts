import { RedisHelper } from 'infrastructure/driven-adapters/redis-adapter/redis-helper'
import { Logger } from 'infrastructure/helpers/logger'
import { api, redisConnection } from 'app/config/environment'

export const loaders = async (): Promise<void> => {
  if (redisConnection.enableRedis) await RedisHelper.connect()
  Logger.info(`API PREFIX: ${api.prefixV1}`)
}
