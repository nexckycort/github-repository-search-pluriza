import path from 'path'
import { ENVIRONMENT } from 'domain/interfaces/server'

// Mapper for environment variables
export const environment = process.env.NODE_ENV ?? 'production'
export const port = process.env.PORT ?? '9000'
export const name = process.env.NAME_API ?? 'API'

export const corsUrl = process.env.CORS_URL ?? '*'

export const api = {
  prefixV1: process.env.PREFIX_API_V1 ?? '/api/v1.0'
}

export const apiGitHub = process.env.API_GITHUB ?? 'https://api.github.com'

export const redisConnection = {
  port: +(process.env.REDIS_PORT ?? 6379),
  host: process.env.REDIS_HOST ?? '127.0.0.1',
  enableRedis: (process.env.REDIS_ENABLE ?? 'true') === 'true'
}

export const pathPublic = () => {
  return environment === ENVIRONMENT.PRODUCTION ? __dirname : path.join(__dirname, '..', '..', 'infrastructure', 'entry-points', 'view')
}
