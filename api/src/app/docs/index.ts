import { api } from 'app/config/environment'
import { serverError, badRequest } from './components'
import { searchParamsSchema } from './schemas/search/search-params-schema'
import { searchSchema } from './schemas/search/search-schema'
import { errorSchema } from './schemas/error/error-schema'
import { searchPath } from './search-path'
import { clearCacheSchema } from './schemas/clear-cache/clear-cache-schema'
import { clearCachePath } from './clear-cache-path'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Node With Clean Architecture',
    description: 'API - Nestor Cortina',
    version: '1.0'
  },
  servers: [{ url: api.prefixV1 }],
  tags: [{ name: 'Search' }],
  paths: {
    '/search': searchPath, // route
    '/clear-cache': clearCachePath // route
  },
  schemas: {
    search: searchSchema, // response
    searchParams: searchParamsSchema, // request

    clearCache: clearCacheSchema, // response

    error: errorSchema
  },
  components: {
    badRequest,
    serverError
  }
}
