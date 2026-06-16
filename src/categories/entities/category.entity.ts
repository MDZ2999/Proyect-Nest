import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
