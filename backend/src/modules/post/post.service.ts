import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { User } from '@/modules/user/entities';
import { Bookmark } from '@/modules/bookmark/entities';

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
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
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

  async findAll(userId: string, queryParams: any) {
    let order = {};
    const { sort, searchTerm } = queryParams;

    if (sort === 'likes') {
      order = { likesCount: 'DESC' };
    } else {
      order = { createdAt: 'DESC' };
    }

    const findOptions = {
      relations: ['user', 'reactions', 'reactions.user'],
      order,
    };

    if (searchTerm) {
      findOptions['where'] = [
        { title: ILike(`%${searchTerm}%`) },
        { author: ILike(`%${searchTerm}%`) },
        { user: { username: ILike(`%${searchTerm}%`) } },
      ];
    }

    const [posts, userBookmarks] = await Promise.all([
      this.postsRepository.find(findOptions),
      this.bookmarkRepository.find({
        where: { user: { id: userId } },
        relations: ['post'],
      }),
    ]);

    const bookmarkedPostIds = userBookmarks.map((bookmark) => bookmark.post.id);

    return posts.map((post) => {
      const likes = post.reactions.filter(
        (reaction) => reaction.reactionType === ReactionType.LIKE,
      );
      const dislikes = post.reactions.filter(
        (reaction) => reaction.reactionType === ReactionType.DISLIKE,
      );

      const isLiked = likes.some((reaction) => reaction.user.id === userId);
      const isDisliked = dislikes.some(
        (reaction) => reaction.user.id === userId,
      );

      const isBookmarked = bookmarkedPostIds.includes(post.id);

      return {
        ...post,
        user: post.user,
        reactions: {
          likes: post.likesCount,
          dislikes: post.dislikesCount,
        },
        isLiked,
        isDisliked,
        isBookmarked,
        isPostOwner: post.user.id === userId,
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
      throw new BadRequestException('User or Post not found');
    }

    const existingReaction = await this.postReactionsRepository.findOne({
      where: { user: { id: userId }, post: { id: postId } },
      relations: ['user', 'post'],
    });

    if (existingReaction) {
      if (existingReaction.reactionType === reactionType) {
        post[`${existingReaction.reactionType}sCount`] -= 1;
        await this.postsRepository.save(post);
        await this.postReactionsRepository.remove(existingReaction);
        return { message: 'Reaction removed.' };
      } else {
        post[`${existingReaction.reactionType}sCount`] -= 1;
        post[`${reactionType}sCount`] += 1;
        await this.postsRepository.save(post);
        existingReaction.reactionType = reactionType;
        await this.postReactionsRepository.save(existingReaction);
        return existingReaction;
      }
    } else {
      post[`${reactionType}sCount`] += 1;
      await this.postsRepository.save(post);
      const newReaction = new PostReactions();
      newReaction.user = user;
      newReaction.post = post;
      newReaction.reactionType = reactionType;
      await this.postReactionsRepository.save(newReaction);
      return newReaction;
    }
  }
}
