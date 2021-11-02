import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    subCategory: string;
    @Column({ default: 1 })
    status: number;

    @ManyToOne(() => Category, category => category.subCategorys)
    category: Category;

}