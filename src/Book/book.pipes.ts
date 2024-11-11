import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { book } from './book.dto';

@Injectable()
export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const bookClass = plainToInstance(book, value);
    const errors = await validate(bookClass);
    if (errors && errors.length > 0) {
      throw new BadRequestException('validation faild');
    }
    return value;
  }
}
