import { Body, Controller, Delete, Get, Param, Post, Put, Res, UnauthorizedException } from "@nestjs/common";
import { UserService } from "./user.service";

 export interface user {
    id:string,
    name : string ,
    email : string,
    password : string
}

@Controller("user")

export class userController {

   constructor(private userService : UserService){
   }
    @Post('/register') 
    userRegister(@Body() user : user){
        return this.userService.addUser(user)

    }
    @Post('/login')
     userLogin(@Body()loginDto: { email: string; password: string }){
        try {
            return this.userService.userLogin(loginDto.email,loginDto.password)
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
    }
}
