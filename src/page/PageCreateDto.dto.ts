import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class PageCreateDto {
    @IsNotEmpty()
    @Length(3, 50)
    page: string;
}