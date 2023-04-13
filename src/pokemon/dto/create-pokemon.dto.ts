import { IsNumber, MinLength, IsPositive, IsString, Min } from "class-validator";

export class CreatePokemonDto {

    @IsNumber()
    @Min(1)
    @IsPositive()
    no: number;

    @MinLength(1)
    @IsString()
    name: string;

}
