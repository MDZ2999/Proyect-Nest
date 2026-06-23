import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFoodDto {
    //Data Transfer Object (DTO) para crear un nuevo alimento
    @IsNotEmpty()
    @IsString()
    name!: string; //Nombre del alimento
    @IsNotEmpty()
    @IsNumber()
    price!: number; //Precio del alimento
    @IsNotEmpty()
    @IsString()
    description!: string; //Descripción del alimento
    @IsOptional()
    @IsString()
    img?: string; //URL de la imagen del alimento
    @IsNotEmpty()
    @IsNumber()
    category!: number; //Categoría del alimento enlazado con categories (e.g., "Bebida", "Comida", etc.)
}
