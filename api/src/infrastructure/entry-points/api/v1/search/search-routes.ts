import { Router } from 'express'

import validator from 'infrastructure/entry-points/api/middlewares/validator'
import { schemaSearch } from 'infrastructure/entry-points/api/v1/search'
import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeSearchController } from 'app/factories/search'
import { AdaptRouteMiddleware } from 'app/adapters/express-middleware-adapter'

export const searchRoutes = Router()

searchRoutes.post('/', ...AdaptRouteMiddleware(validator(schemaSearch)), AdaptRoute(makeSearchController()))
