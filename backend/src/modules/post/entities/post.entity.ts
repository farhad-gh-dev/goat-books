import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from '@/modules/user/entities';

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

  @Column({ default: 0 })
  numLikes: number;

  @Column({ default: 0 })
  numDislikes: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { eager: false })
  user: User;
}
