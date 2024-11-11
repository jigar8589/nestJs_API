import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "../entity/book.entity"
import { Response } from "express";
import { promises } from "fs";
import { BookPipe } from "./book.pipes";


@Controller("book")
export class BookController {

    constructor(private bookservice :BookService){

    }

    @Get("/findAll")
    async getAllBooks(@Res() res :Response){
        const findBooks = await this.bookservice.findAllBooks();
        res.status(HttpStatus.OK).json({data : findBooks})
        
    }
    //  @Put('/update')
    // updateBook(@Body() book :Book) :string{
    //     return this.bookservice.updateBookService(book)
    // }
     
    @Delete('/delete/:id')
    async deleteBook(@Res() res:Response ,@Param('id') bookId :string):Promise<void>{
        const book =  await this.bookservice.deleteBookService(bookId)
        res.status(HttpStatus.CREATED).json({message :"book deleted successfully ",data:book})
        return
    }

    @Post("/add")
   async addBook(@Res() res :Response ,@Body(new BookPipe()) book :Request){
        const addBooks = await  this.bookservice.addBookService(book)
        res.status(201).json({message :"Book Add Successfully " ,data :addBooks})
    }
}   

