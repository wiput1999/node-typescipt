import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Comment } from './Comment'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  text!: string

  @OneToMany(
    _ => Comment,
    comment => comment.post
  )
  comments!: Comment[]
}
