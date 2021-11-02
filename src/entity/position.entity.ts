import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Page } from "./page.entity";

@Entity()
export class Position {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    position: string;

    @Column({ default: 1 })
    status: number;

    @ManyToOne(() => Page, page => page.positions)
    page: Page;

}