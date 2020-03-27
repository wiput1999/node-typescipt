import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Post } from './Post'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  content!: string

  @ManyToOne(
    _ => Post,
    post => post.id
  )
  post!: Post
}
