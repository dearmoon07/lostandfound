import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        nullable: false
    })
    name:string
    
    @Column({
        nullable:false
    })
    location:string

    @CreateDateColumn({
        nullable:false
    })
    registered_at:Date

    @Column({
        default: null
    })
    owner:string

    @Column({
        nullable: false
    })
    finder:string

    @CreateDateColumn({
        nullable: false
    })
    find_time:Date

    @Column()
    photos:string[]

    @Column({
        enum: {'주인에게 전달됨':'주인에게 전달됨', '주인 찾는중':'주인 찾는중'}
    })
    status:'주인에게 전달됨' | '주인 찾는중'

    @Column()
    description:string
}