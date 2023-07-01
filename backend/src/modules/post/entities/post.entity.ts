import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { User } from '@/modules/user/entities';

import { PostReactions } from './post-reactions.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  quote: string;

  @Column({ nullable: true })
  review: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 0 })
  likesCount: number;

  @Column({ default: 0 })
  dislikesCount: number;

  @ManyToOne(() => User, { eager: false })
  user: User;

  @OneToMany(() => PostReactions, (postReaction) => postReaction.post)
  reactions: PostReactions[];
}
