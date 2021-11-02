import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";


@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    comment: string;

    @Column({ type: "datetime" })
    time: string;

    @Column()
    email: string;
    
    @Column()
    user: number;

    @ManyToOne(() => Article, article => article.comments)
    article: Article;

}