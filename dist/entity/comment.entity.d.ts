import { Article } from "./article.entity";
export declare class Comment {
    id: number;
    comment: string;
    time: string;
    email: string;
    user: number;
    article: Article;
}
