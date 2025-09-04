import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isNotEmpty, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto{
    
    @ApiProperty({description: "Ingese un correo valido", default: "juan@mail.com", example: "juan@mail.com"})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @MinLength(6)
    @MaxLength(30)
    @IsNotEmpty()
    password: string;
}
