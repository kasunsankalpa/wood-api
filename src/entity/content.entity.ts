import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";
import { Ctype } from "./ctype.entity";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "text" })
    content: string;

    @ManyToOne(() => Ctype, ctype => ctype.contents)
    ctype: Ctype;

    @ManyToOne(() => Article, article => article.contents)
    articles: Article;
}