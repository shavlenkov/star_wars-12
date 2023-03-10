
import {  IsNotEmpty, IsNumber } from 'class-validator';


export class CreatePeopleDto {

    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    height: number;
    @IsNotEmpty()
    @IsNumber()
    mass: number;
    @IsNotEmpty()
    hair_color: string;
    @IsNotEmpty()
    skin_color: string;
    @IsNotEmpty()
    eye_color: string;
    @IsNotEmpty()
    birth_year: string;
    @IsNotEmpty()
    gender: string;
}