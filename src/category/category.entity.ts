import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class category {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title:string;

    @Column({default:0})
    status:number;
}