import {
  Controller,
  Request,
  Body,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from '@/modules/user/dto';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Post('sign-up')
  signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
}
