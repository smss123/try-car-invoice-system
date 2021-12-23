 
import {IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateCustomerDto {
    id:number
    @IsNotEmpty()
    @IsString()
    Name:string

    Phone:string
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    Email:string
}
