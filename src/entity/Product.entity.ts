import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Img } from "./Img.entity";
import { Feture } from "./Feture.entity";
import { Com } from "./com.entity";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "gfg"})
    name: string;

    @Column({ default: ""})
    itemcode: string;

    @Column({ default: ""})
    imgurl: string;

    @Column({ default: ""})
    fulldetsils:string;

    @Column({ default: ""})
    detais2:string;

    @OneToMany(() => Img, image => image.product)
    images: Img[];

    @OneToMany(() => Feture, feture => feture.product)
    fetures:Feture[];

    @OneToMany(() => Com, com => com.product)
    com:Com[];

}