import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeClearCacheController } from 'app/factories/clear-cache'

export const clearCacheRoutes = Router()

clearCacheRoutes.delete('/', AdaptRoute(makeClearCacheController()))
