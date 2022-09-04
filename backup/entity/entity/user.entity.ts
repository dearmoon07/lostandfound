import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        nullable: false,
        type: 'text'
    })
    name:string

    @Column({
        nullable: false,
        type: 'text'
    })
    email:string

    @Column({
        type:'text'
    })
    picture:string

    @CreateDateColumn('datetime')
    registered_at:Date

    @Column({
        default: true
    })
    status:boolean

    // @Column({
    //     default: '가입'
    // })
    // status: '가입' | '탈퇴'
}