import { category } from "src/category/category.entity";
import { units } from "src/units/units.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class products {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @OneToOne(() => category)
    @JoinColumn()
    category: category;

    @OneToOne(() => units)
    @JoinColumn()
    units: units;

    @Column()
    name:string;

    @Column()
    model:string;

    @Column()
    warranty:string;

    @Column()
    vat:number;

    @Column()
    min_stock:number;

    @Column({ nullable: true})
    image:string;

    @Column({ nullable: true})
    description:string;
   
}