import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Content } from "./content.entity";

@Entity()
export class Ctype {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ctype: string;

    @Column({ default: 1 })
    status: number;

    @OneToMany(() => Content, content => content.ctype)
    contents: Content[];
}