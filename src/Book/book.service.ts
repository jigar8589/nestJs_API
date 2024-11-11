import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from "src/entity/book.entity";
import { Repository } from "typeorm";


@Injectable()
// export class BookService {
//     public books :Book[] = []

export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
      ) {}
  // Find all Book
     async findAllBooks (){
      return await this.bookRepository.find()
   }

    // add bokk
    addBookService (book){
        const title =  book.title
        const author = book.author
        const published = book.published
        const addBook = this.bookRepository.create({
            title :title,
            author :author,
            published :published
        }) 
       
        return this.bookRepository.save(addBook)

    }

   // Delete Book 

     async deleteBookService(bookId :string){
        const deleteBook =  await this.bookRepository.findOne({where:{id:bookId}})
         await this.bookRepository.remove(deleteBook)
        return 'Book Deleted Successfully'
     }




}