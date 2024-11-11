import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()

export class Book{
@PrimaryGeneratedColumn('uuid')
id:string;

@Column({ nullable: false, default: 'Untitled' })
title :string

@Column({length :100})
author:string

@Column({length :10})
published : string
}

