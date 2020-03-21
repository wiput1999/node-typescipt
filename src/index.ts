import express from 'express'
import { Request, Response } from 'express'

import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Posts } from './entity/Posts'

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'node_typescript',
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*.ts']
}).then(connection => {
  const app = express()

  const postRepository = connection.getRepository(Posts)

  app.get('/posts', async function(_: Request, res: Response) {
    const posts = await postRepository.find()
    res.json(posts)
  })

  const PORT = 5000 || process.env.PORT

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
})
