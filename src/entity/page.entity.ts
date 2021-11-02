import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Position } from "./position.entity";

@Entity()
export class Page {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    page: string;

    @Column({ default: 1 })
    status: number;

    @OneToMany(() => Position, position => position.page)
    positions: Position[]

}