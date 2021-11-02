import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";

@Entity()
export class Click {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ip: string;

    @Column({ type: "datetime" })
    time: Date

    @Column()
    details: string;

    @ManyToOne(() => Article, article => article.clicks)
    article: Article;

}