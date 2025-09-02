import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(200)
    password: string;
}
