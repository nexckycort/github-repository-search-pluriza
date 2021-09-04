import { Request, Response, NextFunction } from 'express'
import path from 'path'

import { api, pathPublic } from 'app/config/environment'

export const switchEndpoint = (req: Request, res: Response, next: NextFunction): void => {
  if (req.path.includes(api.prefixV1)) {
    next()
  } else {
    res.sendFile(path.join(pathPublic(), 'pages', 'index.html'))
  }
}
