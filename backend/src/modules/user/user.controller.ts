import {
  Controller,
  Param,
  Body,
  Get,
  Put,
  Delete,
  UseGuards,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';

import { CheckNotEmptyBodyPipe } from '@/pipes';
import { JwtAuthGuard } from '@/modules/auth/guards';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto';
import { CheckUserAuthority } from './guards';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  users() {
    return this.userService.findAll();
  }

  @UseGuards(CheckUserAuthority)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(CheckNotEmptyBodyPipe, ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(CheckUserAuthority)
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.delete(id);
  }
}
