import { Router } from 'express'

import { searchRoutes } from 'infrastructure/entry-points/api/v1/search'
import { clearCacheRoutes } from 'infrastructure/entry-points/api/v1/clear-cache'

export const routerV1 = Router({ caseSensitive: true })

routerV1.use('/search', searchRoutes)
routerV1.use('/clear-cache', clearCacheRoutes)
