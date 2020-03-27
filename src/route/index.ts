import { Router, Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Post } from '../entity/Post'

const router = Router()

router.get('/posts', async function(_: Request, res: Response) {
  const postRepository = getManager().getRepository(Post)

  const posts = await postRepository.find({ relations: ['comments'] })
  res.json(posts)
})

export default router
