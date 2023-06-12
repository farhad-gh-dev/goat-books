import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/modules/user/entities';

import { Post, PostReactions, ReactionType } from './entities';
import { CreatePostDto } from './dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(PostReactions)
    private postReactionsRepository: Repository<PostReactions>,
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
    const posts = await this.postsRepository.find({
      relations: ['user', 'reactions'],
    });

    return posts.map((post) => {
      const { user, reactions, ...postWithoutUser } = post;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;

      const likes = reactions.filter(
        (reaction) => reaction.reactionType === ReactionType.LIKE,
      ).length;
      const dislikes = reactions.filter(
        (reaction) => reaction.reactionType === ReactionType.DISLIKE,
      ).length;

      return {
        ...postWithoutUser,
        user: userWithoutPassword,
        reactions: {
          likes,
          dislikes,
        },
      };
    });
  }

  async createReaction(
    userId: string,
    postId: string,
    reactionType: ReactionType,
  ) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const post = await this.postsRepository.findOne({ where: { id: postId } });

    if (!user || !post) {
      throw new Error('User or Post not found');
    }

    const existingReaction = await this.postReactionsRepository
      .createQueryBuilder('reaction')
      .where('reaction.user.id = :userId', { userId })
      .andWhere('reaction.post.id = :postId', { postId })
      .getOne();

    if (existingReaction) {
      if (existingReaction.reactionType === reactionType) {
        await this.postReactionsRepository.remove(existingReaction);
        return { message: 'Reaction removed.' };
      } else {
        existingReaction.reactionType = reactionType;
        await this.postReactionsRepository.save(existingReaction);
        return existingReaction;
      }
    } else {
      const newReaction = new PostReactions();
      newReaction.user = user;
      newReaction.post = post;
      newReaction.reactionType = reactionType;
      await this.postReactionsRepository.save(newReaction);
      return newReaction;
    }
  }
}
