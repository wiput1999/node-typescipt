import express from 'express'

import 'reflect-metadata'
import { createConnection } from 'typeorm'

import route from './route'

createConnection().then(_ => {
  const app = express()

  app.use('/', route)

  const PORT = 5000 || process.env.PORT

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
})
