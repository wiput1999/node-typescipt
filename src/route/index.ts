import { Router, Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Posts } from '../entity/Posts'

const router = Router()

router.get('/posts', async function(_: Request, res: Response) {
  const postRepository = getManager().getRepository(Posts)

  const posts = await postRepository.find()
  res.json(posts)
})

export default router
