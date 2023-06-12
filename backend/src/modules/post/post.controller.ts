import {
  Controller,
  Body,
  Param,
  Req,
  Post,
  Get,
  Delete,
  UseGuards,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';

import { JwtAuthGuard } from '@/modules/auth/guards';

import { PostService } from './post.service';
import { CreatePostDto } from './dto';
import { ReactionType } from './entities';

@UseGuards(JwtAuthGuard)
@Controller('post')
export class PostController {
  constructor(private postsService: PostService) {}

  @Post()
  create(@Req() req, @Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postsService.createPost(req.user.id, createPostDto);
  }

  @Get('posts')
  posts() {
    return this.postsService.findAll();
  }

  @Delete(':id')
  delete(@Req() req, @Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.deletePost(req.user.id, id);
  }

  @Post('/:postId/like')
  like(@Param('postId') postId: string, @Req() req) {
    return this.postsService.createReaction(
      req.user.id,
      postId,
      ReactionType.LIKE,
    );
  }

  @Post('/:postId/dislike')
  dislike(@Param('postId') postId: string, @Req() req) {
    return this.postsService.createReaction(
      req.user.id,
      postId,
      ReactionType.DISLIKE,
    );
  }
}
