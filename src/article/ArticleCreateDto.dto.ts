import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { PageCreateDto } from "src/page/PageCreateDto.dto";

export class ArticleCreateDto {


    @IsNotEmpty()
    @Length(3, 50)
    title: string;

    subtitle: string;

    description: string;

    price1: number;

    price2: number;

    price3: number;

    discount1: number;

    discount2: number;

    discount3: number;

    auther: string;

    user: number;

    date: string;

    link: string;

    pages: [];

    positions: [];

    categorys: [];

    subCategorys: [];

    contents: [];

    // reviews: Review[];

    // clicks: Click[];

    // comments: Comment[]

}