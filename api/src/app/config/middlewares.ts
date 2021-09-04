import { Application } from 'express'

import { archivesStatic, bodyParser, cors, gzip, helmet, switchEndpoint } from 'app/middlewares'

export const middlewares = (app: Application): void => {
  app.use(helmet)
  app.use(gzip)
  app.use(cors)
  app.use(bodyParser)
  app.use(archivesStatic)
  app.use(switchEndpoint)
}
