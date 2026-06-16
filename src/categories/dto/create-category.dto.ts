import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    //Data Transfer Object (DTO) para crear un nuevo alimento
    @IsNotEmpty()
    @IsString()
    name!: string; //Nombre de la categoria
    @IsNotEmpty()
    @IsString()
    description!: string; //Descripción de la categoria
    @IsNotEmpty()
    @IsBoolean()
    active!: boolean; //Indica si la categoria está activa o no
}
