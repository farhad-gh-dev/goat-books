import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/modules/user/entities';

import { Post } from './entities';
import { CreatePostDto } from './dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  private buildPostResponse(post: Post) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, ...postWithoutUser } = post;
    return {
      ...postWithoutUser,
      user: user.id,
    };
  }

  private buildAllPostsResponse(post: Post) {
    const { user, ...postWithoutUser } = post;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return {
      ...postWithoutUser,
      user: userWithoutPassword,
    };
  }

  async createPost(userId: string, createPostDto: CreatePostDto) {
    const post = new Post();
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    post.title = createPostDto.title;
    post.quote = createPostDto.quote;
    post.review = createPostDto.review;
    post.author = createPostDto.author;
    post.user = user;

    await this.postsRepository.save(post);

    return this.buildPostResponse(post);
  }

  async deletePost(userId: string, postId: string) {
    const post = await this.postsRepository.findOne({
      where: { id: postId },
      relations: ['user'],
    });

    if (!post) {
      throw new NotFoundException(`Post with the given ID was not found`);
    }

    if (post.user.id !== userId) {
      throw new UnauthorizedException(
        `You do not have permission to delete this post`,
      );
    }

    await this.postsRepository.delete(postId);

    return { message: 'Post deleted successfully.' };
  }

  async findAll() {
    const posts = await this.postsRepository.find({ relations: ['user'] });
    return posts.map((post) => this.buildAllPostsResponse(post));
  }
}
