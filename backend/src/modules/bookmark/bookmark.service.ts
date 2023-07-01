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
    const user = new User();
    user.id = userId;
    const post = new Post();
    post.id = postId;

    const existingBookmark = await this.bookmarkRepository.findOne({
      where: { user, post },
    });

    if (existingBookmark) {
      await this.bookmarkRepository.remove(existingBookmark);
      return { message: 'Post has been un-bookmarked successfully.' };
    } else {
      const bookmark = new Bookmark();
      bookmark.user = user;
      bookmark.post = post;

      await this.bookmarkRepository.save(bookmark);
      return { message: 'Post has been bookmarked successfully.' };
    }
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
