import { IsString, IsInt } from 'class-validator';

export class book {


    @IsString()
    title :string;
    @IsString()
    author :string;
    @IsString()
    published:string;
}

