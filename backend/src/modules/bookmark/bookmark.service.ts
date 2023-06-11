import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/modules/user/entities';
import { Post } from '@/modules/post/entities';

import { Bookmark } from './entities';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
  ) {}

  async addBookmark(userId: string, postId: string) {
    const bookmark = new Bookmark();
    const user = new User();
    user.id = userId;
    const post = new Post();
    post.id = postId;

    bookmark.user = user;
    bookmark.post = post;

    await this.bookmarkRepository.save(bookmark);
    return { message: 'post has been bookmarked successfully.' };
  }

  async removeBookmark(userId: string, postId: string) {
    const user = new User();
    user.id = userId;
    const post = new Post();
    post.id = postId;
    const test = await this.bookmarkRepository.delete({ user, post });
    console.log(test);
    return { message: 'post has been un-bookmarked successfully.' };
  }

  async getBookmarks(userId: string): Promise<Post[]> {
    const user = new User();
    user.id = userId;

    const bookmarks = await this.bookmarkRepository.find({
      where: { user },
    });
    return bookmarks.map((bookmark) => bookmark.post);
  }
}
