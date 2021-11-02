import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubCategory } from "./subCategory.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column({ default: 1 })
    status: number;

    @OneToMany(() => SubCategory, subCategory => subCategory.category)
    subCategorys: SubCategory[]
}