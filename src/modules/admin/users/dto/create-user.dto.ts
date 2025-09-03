import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({nullable:false, required:true}) // documenta la propiedad en swagger
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    @IsNotEmpty()  // no puede estar vacio
    name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    @MaxLength(200)
    @IsNotEmpty()
    password: string;

}
