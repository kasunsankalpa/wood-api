import { Article } from "./article.entity";
import { Ctype } from "./ctype.entity";
export declare class Content {
    id: number;
    content: string;
    ctype: Ctype;
    articles: Article;
}
