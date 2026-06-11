import { IsNotEmpty, IsString } from "class-validator";

export class CreateFoodDto {
    //Data Transfer Object (DTO) para crear un nuevo alimento
    @IsNotEmpty()
    @IsString()
    name!: string; //Nombre del alimento
    @IsNotEmpty()
    price!: number; //Precio del alimento
    @IsNotEmpty()
    description!: string; //Descripción del alimento
    @IsNotEmpty()
    img!: string; //URL de la imagen del alimento
    @IsNotEmpty()
    category!: string; //Categoría del alimento (e.g., "Bebida", "Comida", etc.)
}
