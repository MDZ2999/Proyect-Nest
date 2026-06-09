import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
        id!: number;
    @Column()
        name!: string;
    @Column()
        price!: number;
    @Column()
        description!: string;
    @Column()
        img!: string;
    @Column()
        category!: string;
    @Column({default: true})
        isAvailable!: boolean;
}
