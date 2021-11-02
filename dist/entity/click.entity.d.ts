import { Article } from "./article.entity";
export declare class Click {
    id: number;
    ip: string;
    time: Date;
    details: string;
    article: Article;
}
