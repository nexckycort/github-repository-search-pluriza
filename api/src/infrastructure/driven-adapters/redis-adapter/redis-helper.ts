import redis, { RedisClient } from 'redis'

import { Logger } from 'infrastructure/helpers/logger'
import { redisConnection } from 'app/config/environment'

let client!: RedisClient

export const RedisHelper = {
  async connect(port = redisConnection.port, host = redisConnection.host): Promise<void> {
    client = redis.createClient(port, host)
    return await new Promise<void>((resolve) => {
      client.on('connect', () => {
        Logger.info('Connection to the redis has been established successfully! ✌️')
        resolve()
      })
    })
  },

  connection: () => client,

  save: async (key: string, value: any, expireIn = 7200) => {
    client.set(key, JSON.stringify(value))
    client.expire(key, expireIn)
    return value
  },

  find: async <T>(key: string) => {
    return await new Promise<T>((resolve, reject) => {
      client.exists(key, (err, reply) => {
        if (err !== null) reject(err)
        if (reply === 1) {
          client.get(key, (err, reply) => {
            if (err !== null) reject(err)
            resolve(JSON.parse(reply as string) as T)
          })
        } else {
          resolve(undefined as unknown as T)
        }
      })
    })
  },

  delete: async (key?: string) => {
    return await new Promise<boolean>((resolve, reject) => {
      if (key === undefined) {
        client.flushall((err, reply) => {
          if (err !== null) reject(err)
          resolve(true)
        })
      } else {
        client.del(key, (err, reply) => {
          if (err !== null) reject(err)
          resolve(true)
        })
      }
    })
  }
}
