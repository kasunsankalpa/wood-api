import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Feture{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    icon: string;

    @Column()
    status:number;

    @ManyToOne(() => Product, product => product.fetures)
    product:Product;

    
}