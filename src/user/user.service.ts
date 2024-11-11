import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import {user} from './user.controller'
import { constrainedMemory } from "process";



@Injectable()
// export class BookService {
//     public books :Book[] = []

export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
 
    
     async addUser(user:user){
          
        const name = user.name
        const email = user.email
        const password  = user.password
        const userdata =   this.userRepository.create({
            name : name,
            email : email,
            password:password

         })

         return  await this.userRepository.save(userdata)

    }


   async userLogin (email:string,password:string){
         const user = await this. userRepository.findOne({where :{email:email}})
         
         if (!user) {
           throw new UnauthorizedException('User not found');
         }
         if (password != user.password) {
           throw new UnauthorizedException('Invalid password');
         }
     
         return { message: 'Login successful', userId: user.id, email: user.email };
       }
     
   }



    