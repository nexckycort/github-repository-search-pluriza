import express from 'express'
import path from 'path'

import { pathPublic } from 'app/config/environment'

export const archivesStatic = express.static(path.join(pathPublic(), 'public'))
