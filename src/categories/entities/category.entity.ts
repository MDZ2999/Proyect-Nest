import { Food } from "src/foods/entities/food.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() //Importante para que sea creado en la BD
export class Category {
    @PrimaryGeneratedColumn()
        id!: number;
    @Column()
        name!: string;
    @Column()
        description!: string;
    @Column({default: true})
        active!: boolean
    @OneToMany(()=>Food,(food)=>food.category)
        foods!:Food[]
}
