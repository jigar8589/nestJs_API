import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


@Entity()


export class User{

    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({length : 50})
    name: string

    @Column({length :30})
    email : string 
    
    @Column({length :20})
    password : string

    @CreateDateColumn({ type: "timestamp",name:"create_at" , default: () => "CURRENT_TIMESTAMP" })
    createAt: Date;
}


