import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    review: number;

    @ManyToOne(() => Article, article => article.reviews)
    article: Article;
}