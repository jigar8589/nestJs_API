import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entity/book.entity';
import { User } from './entity/user.entity';
import { userModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin12#',
      database: 'book_db',
      entities: [Book,User],
      synchronize: true,
    }),
    BookModule,userModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
