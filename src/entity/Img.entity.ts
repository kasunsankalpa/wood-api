import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";


@Entity()
export class Img{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imgpath:string;

    @Column()
    status:number;

    @ManyToOne(() => Product, product => product.images)   
    product: Product;
}