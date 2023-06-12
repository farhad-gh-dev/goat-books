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

  @Column()
  review: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { eager: false })
  user: User;

  @OneToMany(() => PostReactions, (postReaction) => postReaction.post)
  reactions: PostReactions[];
}
