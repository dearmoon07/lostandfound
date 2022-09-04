import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        enum: {'cloth':'cloth', 'tool':'tool', 'sports':'sports', 'electric':'electric','book':'book','others':'others'}
    })
    type: 'cloth' | 'tool' | 'sports' | 'electric' | 'book' | 'others'
}