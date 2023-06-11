import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CheckNotEmptyBodyPipe implements PipeTransform {
  transform(value: any) {
    if (Object.keys(value).length === 0) {
      throw new BadRequestException('Request body should not be empty');
    }
    return value;
  }
}
