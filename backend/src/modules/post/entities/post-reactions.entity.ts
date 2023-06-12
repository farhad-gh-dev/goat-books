import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { User } from '@/modules/user/entities';
import { Post } from '@/modules/post/entities';

export enum ReactionType {
  LIKE = 'like',
  DISLIKE = 'dislike',
}

@Entity()
export class PostReactions {
  @PrimaryGeneratedColumn('uuid')
  reactionId: string;

  @Column({
    type: 'enum',
    enum: ReactionType,
    default: ReactionType.LIKE,
  })
  reactionType: ReactionType;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Post, (post) => post.reactions, { onDelete: 'CASCADE' })
  post: Post;
}
