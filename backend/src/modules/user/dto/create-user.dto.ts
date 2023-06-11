import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(30)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsOptional()
  @MaxLength(160)
  bio?: string;

  @IsOptional()
  profileImage?: string;
}
