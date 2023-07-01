import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@/modules/user/entities';
import { Bookmark } from '@/modules/bookmark/entities';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostReactions } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostReactions, User, Bookmark])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
