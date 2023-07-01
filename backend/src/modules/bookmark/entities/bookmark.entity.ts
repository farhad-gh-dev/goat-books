import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from '@/modules/user/entities';
import { Post } from '@/modules/post/entities';

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Post, { eager: true, onDelete: 'CASCADE' })
  post: Post;
}
