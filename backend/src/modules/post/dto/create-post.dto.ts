import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @MaxLength(420)
  quote: string;

  @IsOptional()
  @IsString()
  @MaxLength(320)
  review: string;

  @IsString()
  @MaxLength(30)
  author: string;
}
