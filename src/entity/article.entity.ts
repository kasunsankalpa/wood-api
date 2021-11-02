import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Click } from "./click.entity";
import { Content } from "./content.entity";
import { Page } from "./page.entity";
import { Position } from "./position.entity";
import { Review } from "./review.entity";
import { SubCategory } from "./subCategory.entity";
import { Comment } from "./comment.entity";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    subtitle: string;

    @Column({ nullable: true , type:"text"})
    description: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price1: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price2: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price3: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    discount1: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    discount2: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    discount3: number;

    @Column()
    auther: string;

    @Column()
    user: number;

    @Column({ type: 'datetime' }) // Recommended
    date: string;

    @Column()
    link: string;

    @ManyToMany(() => Page)
    @JoinTable()
    pages: Page[];

    @ManyToMany(() => Position)
    @JoinTable()
    positions: Position[];

    @ManyToMany(() => Category)
    @JoinTable()
    categorys: Category[];

    @ManyToMany(() => SubCategory)
    @JoinTable()
    subCategorys: SubCategory[];

    @OneToMany(() => Content, content => content.articles)
    contents: Content[];

    @OneToMany(() => Review, review => review.article)
    reviews: Review[];

    @OneToMany(() => Click, click => click.article)
    clicks: Click[];

    @OneToMany(() => Comment, comment => comment.article)
    comments: Comment[]

}