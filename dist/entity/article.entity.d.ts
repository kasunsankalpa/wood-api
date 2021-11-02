import { Category } from "./category.entity";
import { Click } from "./click.entity";
import { Content } from "./content.entity";
import { Page } from "./page.entity";
import { Position } from "./position.entity";
import { Review } from "./review.entity";
import { SubCategory } from "./subCategory.entity";
import { Comment } from "./comment.entity";
export declare class Article {
    id: number;
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
    pages: Page[];
    positions: Position[];
    categorys: Category[];
    subCategorys: SubCategory[];
    contents: Content[];
    reviews: Review[];
    clicks: Click[];
    comments: Comment[];
}
