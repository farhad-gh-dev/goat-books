import { IsEmail, IsOptional, MinLength, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(30)
  username?: string;

  @IsOptional()
  @MinLength(8)
  password?: string;

  @IsOptional()
  @MaxLength(160)
  bio?: string;

  @IsOptional()
  profileImage?: string;
}
