import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Com {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    web:string;

    @Column()
    comment:string;

    @Column()
    date:string;

    @ManyToOne(() => Product, product => product.images)   
    product: Product;

    

}