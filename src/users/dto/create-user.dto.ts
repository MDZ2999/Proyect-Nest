import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    //Data Transfer Object (DTO) para crear un nuevo alimento
    @IsNotEmpty()
    @IsString()
    name!: string;
    @IsNotEmpty()
    @IsString()
    email!: string
    @IsNotEmpty()
    @IsString()
    password!: string;
}
