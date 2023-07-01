import {
  Controller,
  Post,
  Get,
  Param,
  UseGuards,
  ParseUUIDPipe,
  Req,
} from '@nestjs/common';

import { JwtAuthGuard } from '@/modules/auth/guards';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtAuthGuard)
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post('/:postId')
  addBookmark(@Req() req, @Param('postId', ParseUUIDPipe) postId: string) {
    return this.bookmarkService.addBookmark(req.user.id, postId);
  }

  @Get()
  getBookmarks(@Req() req) {
    return this.bookmarkService.getBookmarks(req.user.id);
  }
}
